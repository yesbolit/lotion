import TextBlock from '@/components/blocks/TextBlock.vue'
import DividerBlock from '@/components/blocks/DividerBlock.vue'
import HeadingBlock from '@/components/blocks/HeadingBlock.vue'
import QuoteBlock from '@/components/blocks/QuoteBlock.vue'
import ListBlock from '@/components/blocks/ListBlock.vue'


export interface Block {
  id: string,
  type: BlockType;
  details: Details;
}

export enum BlockType {
  Text = 'TEXT',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  Divider = 'DIVIDER',
  Quote = 'QUOTE',
  ListBulleted = 'LIST_BULLETED',
  ListNumbered = 'LIST_NUMBERED',
}

export interface ListItem {
  id: string;
  content: string;
  level?: number;
}

export interface Details {
  value?: string;
  blockTypes?: BlockType[];
  items?: ListItem[];
  anchor?: string;
}

export const BlockComponents = {
  [BlockType.Text]: TextBlock,
  [BlockType.H1]: HeadingBlock,
  [BlockType.H2]: HeadingBlock,
  [BlockType.H3]: HeadingBlock,
  [BlockType.H4]: HeadingBlock,
  [BlockType.Divider]: DividerBlock,
  [BlockType.Quote]: QuoteBlock,
  [BlockType.ListBulleted]: ListBlock,
  [BlockType.ListNumbered]: ListBlock,
}

export const textBlockMap = [BlockType.Text, BlockType.Quote]

export const isTextBlock = (type: string) => {
  return textBlockMap.some(textBlock => textBlock === type)
}

export const isListBlock = (type: string) => {
  return type === BlockType.ListBulleted || type === BlockType.ListNumbered
}

export const isHeadingBlock = (type: string) => {
  return [BlockType.H1, BlockType.H2, BlockType.H3, BlockType.H4].includes(type as BlockType)
}

export const availableBlockTypes = [
  {
    type: 'Turn into',
    icon: 'bi-text-left',
    label: 'Text',
    blockType: BlockType.Text,
    canSplit: true,
  }, {
    type: 'Turn into',
    icon: 'bi-type-h1',
    label: 'Heading 1',
    blockType: BlockType.H1,
    canSplit: true,
  }, {
    type: 'Turn into',
    icon: 'bi-type-h2',
    label: 'Heading 2',
    blockType: BlockType.H2,
    canSplit: true,
  }, {
    type: 'Turn into',
    icon: 'bi-type-h3',
    label: 'Heading 3',
    blockType: BlockType.H3,
    canSplit: true,
  }, {
    type: 'Turn into',
    icon: 'bi-type-h3',
    label: 'Heading 4',
    blockType: BlockType.H4,
    canSplit: true,
  }, {
    type: 'Turn into',
    icon: 'bi-hr',
    label: 'Divider',
    blockType: BlockType.Divider,
    canSplit: false,
  }, {
    type: 'Turn into',
    icon: 'bi-quote',
    label: 'Quote',
    blockType: BlockType.Quote,
    canSplit: true,
  }, {
    type: 'Turn into',
    icon: 'bi-list-ul',
    label: 'Bulleted List',
    blockType: BlockType.ListBulleted,
    canSplit: false,
  }, {
    type: 'Turn into',
    icon: 'bi-list-ol',
    label: 'Numbered List',
    blockType: BlockType.ListNumbered,
    canSplit: false,
  },
] as { type:string, icon:string, label:string, blockType:BlockType|string, canSplit:boolean }[]
