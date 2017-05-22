import md from 'markdown-in-js'

export const markdown = {
  h1: H1,
  a: Link
}

/*
 * Components
 */

function H1({ children }) {
  const id = toHtmlId(children)

  return <h1 id={id}>{children}</h1>
}

function Link({ href, children }) {
  return <a className='animated' href={href}>{children}</a>
}

/*
 * Utilities.
 */

function toHtmlId(children) {
  let id

  if (typeof children === 'string') {
    id = toSlug(children)
  } else if (children[0] === 'string') {
    id = toSlug(children[0])
  }

  return id
}

function toSlug(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')
}

export default () => md(markdown)`
# options
`
