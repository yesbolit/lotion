export function generateAnchor(text: string): string {
  if (!text) return `anchor-${Date.now()}`

  // Strip HTML tags and get plain text
  const temp = document.createElement('div')
  temp.innerHTML = text
  const plainText = temp.textContent || temp.innerText || ''

  // Transliterate Cyrillic to Latin
  const cyrillic: Record<string, string> = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
    'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
  }

  const slug = plainText
    .toLowerCase()
    .split('')
    .map(char => cyrillic[char] ?? char)
    .join('')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .trim()

  return slug || `anchor-${Date.now()}`
}

export async function copyAnchorLink(anchor: string): Promise<boolean> {
  if (!anchor) return false

  const baseUrl = window.location.origin + window.location.pathname
  const link = `${baseUrl}#${anchor}`

  try {
    await navigator.clipboard.writeText(link)
    return true
  } catch {
    return false
  }
}

export function scrollToAnchor(hash: string): void {
  const target = hash.startsWith('#') ? hash.slice(1) : hash
  if (!target) return

  const element = document.getElementById(target)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
