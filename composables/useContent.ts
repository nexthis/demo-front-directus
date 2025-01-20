import type { DirectusFile } from '@directus/sdk'
import praser from 'editorjs-html'
import _ from 'lodash'

function image(block: object) {
  const img = useImage()

  const id = _.get(block, 'data.file.fileId') as string | undefined
  const title = _.get(block, 'data.file.title') as string | undefined
  const height = _.get(block, 'data.file.height') as number | undefined
  const width = _.get(block, 'data.file.width') as number | undefined
  const hasFullSize = width && height
  const size = hasFullSize ? `width="${width}px" height="${height}"` : null
  if (!id)
    return

  const image = img.getImage(id, { provider: 'directus', modifiers: { format: 'webp' } })

  return `
    <img src="${image.url}" alt="${title ?? 'Image'}" class="img-fluid" ${size} >
  `
}

interface nestedlistProps {
  data: {
    style: string
    items: Array<{ content: string; items: Array<any> }>
  }
}

function nestedlist(block: nestedlistProps): string {
  const items = []
  const style = block.data.style === 'unordered' ? 'ul' : 'ol'

  for (const item of block.data.items) {
    if (_.isEmpty(item.items)) {
      items.push(`<li>${item.content}</li>`)
      continue
    }
    items.push(`<li class="nested"> <div>${item.content} </div> ${nestedlist({ data: { items: item.items, style: block.data.style } })} </li>`)
  }

  return `<${style}>${items.join(' ')}</${style}>`
}

function raw(block: { data: { html: string } }) {
  return block.data.html
}

interface tableProps {
  data: {
    content: Array<Array<string>>
    withHeadings: boolean
  }
}

function table(block: tableProps) {
  const content = [...block.data.content]
  const isHeadings = block.data.withHeadings
  let head = ''

  if (isHeadings) {
    const first = content.shift() ?? []
    const th = first.map(item => `<th> ${item} </th>`).join('')
    head = `
    <thead>
      <tr>
        ${th}
      </tr>
    </thead>
    `
  }

  const tr = content.map(item => `<tr> ${item.map(i => `<td>${i}</td>`).join('')}  </tr>`).join('')

  return `
  <table>
    ${head}
    <tbody>
      ${tr}
    </tbody>
  </table>`
}

// function toggle(block) {
//   console.log(block)
// }

function attaches(block: { data: { file: DirectusFile<object>; title: string } }) {
  const config = useRuntimeConfig()

  const url = new URL(block.data.file.url, config.public.API_BASE_URL)
  url.searchParams.append('download', '')

  const sizeFormatter = new Intl.NumberFormat([], {
    style: 'unit',
    unit: 'byte',
    notation: 'compact',
    unitDisplay: 'narrow',
  })
  return `
    <div class="attaches">
      <div class="attaches__content">
        <div class="attaches__extension ${block.data.file.extension}">${block.data.file.extension}</div>
        <div class="attaches__information">
          <div class="attaches__title">${block.data.title}</div>
          <div class="attaches__size">${sizeFormatter.format(block.data.file.size)}</div>
        </div>
      </div>
      <a download="${block.data.file.name}" target="_blank" href="${url.href}">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="#888888" d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4q.425 0 .713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15q.425 0 .713.288T6 16v2h12v-2q0-.425.288-.712T19 15q.425 0 .713.288T20 16v2q0 .825-.587 1.413T18 20z"/>
        </svg>
      </a>
    </div>
  `
}

function checklist(block) {
  const items = block.data.items as Array<{ checked: boolean; text: string }>
  const result = []

  for (const item of items)
    result.push(`<label class="checklist__label"> <input class="checklist__input" type="checkbox" ${item.checked ? 'checked' : ''}>${item.text} </input> </label>`)

  return `<fieldset class="checklist">${result.join(' ')}</fieldset>`
}

export function useContent() {
  return {
    parse: (content: object) => praser({
      image,
      nestedlist,
      raw,
      table,
      // toggle,
      attaches,
      checklist,
    }).parse(content),
  }
}
