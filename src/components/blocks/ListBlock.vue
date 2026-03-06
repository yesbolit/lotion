<template>
  <div ref="listContainer" class="w-full py-1">
    <component :is="props.block.type === BlockType.ListNumbered ? 'ol' : 'ul'"
      class="lotion-list"
      :class="{
        'lotion-list-ul': props.block.type === BlockType.ListBulleted,
        'lotion-list-ol': props.block.type === BlockType.ListNumbered,
      }">
      <li
        v-for="(item, index) in listItems"
        :key="item.id"
        class="lotion-list-item"
      >
        <div
          ref="itemRefs"
          class="lotion-list-item-content focus:outline-none focus-visible:outline-none w-full"
          :contenteditable="!props.readonly"
          :data-ph="'List item'"
          spellcheck="false"
          @input="handleItemInput(index, $event)"
          @keydown="handleItemKeydown(index, $event)"
          v-html="item.content"
        ></div>
      </li>
    </component>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, onMounted, nextTick, watch } from 'vue'
import { Block, BlockType, ListItem } from '@/utils/types'
import { v4 as uuidv4 } from 'uuid'

const props = defineProps({
  block: {
    type: Object as PropType<Block>,
    required: true,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['keydown'])

const listContainer = ref<HTMLDivElement>()
const itemRefs = ref<HTMLElement[]>([])

const listItems = ref<ListItem[]>([])

function initItems() {
  if (props.block.details.items && props.block.details.items.length > 0) {
    listItems.value = props.block.details.items.map(item => ({
      id: item.id || uuidv4(),
      content: item.content || '',
      level: item.level || 0,
    }))
  } else {
    const initialContent = props.block.details.value || ''
    listItems.value = [{
      id: uuidv4(),
      content: initialContent,
      level: 0,
    }]
  }
  syncToBlock()
}

function syncToBlock() {
  props.block.details.items = listItems.value.map(item => ({
    id: item.id,
    content: item.content,
    level: item.level,
  }))
}

function handleItemInput(index: number, event: Event) {
  const target = event.target as HTMLElement
  listItems.value[index].content = target.innerHTML
  syncToBlock()
}

function handleItemKeydown(index: number, event: KeyboardEvent) {
  // Forward non-list-specific keys to parent
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown' ||
      event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    emit('keydown', event)
    return
  }

  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    event.stopPropagation()

    const target = event.target as HTMLElement
    const selection = window.getSelection()
    let afterContent = ''

    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)
      const afterRange = document.createRange()
      afterRange.setStart(range.endContainer, range.endOffset)
      afterRange.setEnd(target, target.childNodes.length)
      const fragment = afterRange.cloneContents()
      const tempDiv = document.createElement('div')
      tempDiv.appendChild(fragment)
      afterContent = tempDiv.innerHTML
      afterRange.deleteContents()
      listItems.value[index].content = target.innerHTML
    }

    // Empty last item -> convert to paragraph (emit split to parent)
    if (index === listItems.value.length - 1 && !target.textContent?.trim() && !afterContent.trim()) {
      // Remove the empty item
      listItems.value.splice(index, 1)
      if (listItems.value.length === 0) {
        // Convert the whole block back to text
        props.block.details.value = ''
        props.block.details.items = undefined
      }
      syncToBlock()
      // Tell parent to split (which will create a new paragraph)
      emit('keydown', new KeyboardEvent('keydown', { key: 'Enter' }))
      return
    }

    const newItem: ListItem = {
      id: uuidv4(),
      content: afterContent,
      level: listItems.value[index].level || 0,
    }
    listItems.value.splice(index + 1, 0, newItem)
    syncToBlock()

    nextTick(() => {
      const newItemEl = itemRefs.value[index + 1]
      if (newItemEl) {
        newItemEl.focus()
        placeCursorAtStart(newItemEl)
      }
    })
    return
  }

  if (event.key === 'Backspace') {
    const selection = window.getSelection()
    if (selection && selection.isCollapsed) {
      const target = event.target as HTMLElement
      // Check if cursor is at start
      const range = selection.getRangeAt(0)
      const preRange = document.createRange()
      preRange.setStart(target, 0)
      preRange.setEnd(range.startContainer, range.startOffset)
      const preContent = preRange.cloneContents()
      const hasContentBefore = preContent.textContent && preContent.textContent.length > 0

      if (!hasContentBefore) {
        event.preventDefault()
        event.stopPropagation()
        const currentContent = target.innerHTML

        if (listItems.value.length === 1) {
          // Last item — convert list to paragraph
          props.block.details.value = currentContent
          props.block.details.items = undefined
          syncToBlock()
          // Emit merge to trigger block type change in parent
          emit('keydown', new KeyboardEvent('keydown', { key: 'Backspace' }))
          return
        }

        if (index === 0) {
          // First item — merge with next
          if (listItems.value.length > 1) {
            listItems.value[1].content = currentContent + listItems.value[1].content
            listItems.value.splice(0, 1)
            syncToBlock()
            nextTick(() => {
              const firstItemEl = itemRefs.value[0]
              if (firstItemEl) {
                firstItemEl.focus()
                placeCursorAtStart(firstItemEl)
              }
            })
          }
        } else {
          // Merge with previous item
          const prevContent = itemRefs.value[index - 1]?.innerHTML || listItems.value[index - 1].content
          const prevLength = itemRefs.value[index - 1]?.textContent?.length || 0
          listItems.value[index - 1].content = prevContent + currentContent
          listItems.value.splice(index, 1)
          syncToBlock()
          nextTick(() => {
            const prevItemEl = itemRefs.value[index - 1]
            if (prevItemEl) {
              prevItemEl.focus()
              placeCursorAtPosition(prevItemEl, prevLength)
            }
          })
        }
        return
      }
    }
  }
}

function placeCursorAtStart(el: HTMLElement) {
  const range = document.createRange()
  const sel = window.getSelection()
  range.setStart(el, 0)
  range.collapse(true)
  sel?.removeAllRanges()
  sel?.addRange(range)
}

function placeCursorAtPosition(el: HTMLElement, textOffset: number) {
  const range = document.createRange()
  const sel = window.getSelection()

  // Walk text nodes to find correct position
  let currentOffset = 0
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
  let node = walker.nextNode()
  while (node) {
    const len = node.textContent?.length || 0
    if (currentOffset + len >= textOffset) {
      range.setStart(node, textOffset - currentOffset)
      range.collapse(true)
      sel?.removeAllRanges()
      sel?.addRange(range)
      return
    }
    currentOffset += len
    node = walker.nextNode()
  }
  // Fallback: end of element
  range.selectNodeContents(el)
  range.collapse(false)
  sel?.removeAllRanges()
  sel?.addRange(range)
}

function onSet() {
  initItems()
  nextTick(() => {
    if (itemRefs.value[0]) {
      itemRefs.value[0].focus()
    }
  })
}

function getItems(): ListItem[] {
  // Read fresh content from DOM
  return listItems.value.map((item, i) => ({
    id: item.id,
    content: itemRefs.value[i]?.innerHTML || item.content,
    level: item.level || 0,
  }))
}

onMounted(() => {
  initItems()
})

watch(() => props.block.details.items, (newItems) => {
  if (newItems && JSON.stringify(newItems) !== JSON.stringify(listItems.value)) {
    listItems.value = newItems.map(item => ({
      id: item.id || uuidv4(),
      content: item.content || '',
      level: item.level || 0,
    }))
  }
}, { deep: true })

defineExpose({
  onSet,
  getItems,
  listItems,
})
</script>

<style>
.lotion-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.lotion-list-ul .lotion-list-item::before {
  content: '\2022';
  font-weight: bold;
  font-size: 1.2em;
  line-height: 1.6;
  flex-shrink: 0;
  width: 1em;
  text-align: center;
}

.lotion-list-ol {
  counter-reset: lotion-list-counter;
}

.lotion-list-ol .lotion-list-item {
  counter-increment: lotion-list-counter;
}

.lotion-list-ol .lotion-list-item::before {
  content: counter(lotion-list-counter) '.';
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.6;
  flex-shrink: 0;
  min-width: 1.5em;
  text-align: right;
  padding-right: 0.25rem;
}

.lotion-list-item {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
  align-items: flex-start;
}

.lotion-list-item-content {
  flex: 1;
  line-height: 1.6;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.lotion-list-item-content:empty::before {
  content: attr(data-ph);
  color: #a0a0a0;
  pointer-events: none;
}
</style>
