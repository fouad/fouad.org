import md from 'markdown-in-js'
import react from 'react'
import { last } from 'lodash'

export const markdown = {
  h1: H1,
  h2: H2,
  a: Link
}

/*
 * Components
 */

function Heading ({ is, children }) {
  return React.createElement(is, {
    id: toHtmlId(children),
    children
  })
}

function H1({ children }) {
  return <Heading is='h1'>{children}</Heading>
}

function H2({ children }) {
  return <Heading is='h2'>{children}</Heading>
}

function Link({ href, children }) {
  return <a className='animated' href={href}>{children}</a>
}

export function N({ children }) {
  return (
    <span>
      {children}
      <style jsx>{`
        & {
          display: block;
          position: absolute;
          opacity: .5;
          font-size: .8em;
          margin-left: -24px;
        }
        @media(max-width: 767px) {
          font-size: .6em;
          margin-left: -16px;
        }
      `}</style>
    </span>
  )
}

/*
 * Utilities.
 */

function toHtmlId(children) {
  var id

  if (typeof children === 'string') {
    id = toSlug(children)
  } else if (typeof children[0] === 'string') {
    id = toSlug(children[0])
  } else if (typeof last(children) === 'string') {
    id = toSlug(last(children))
  }

  return id
}

function toSlug(text) {
  return text.toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')
}

export const code = {
  start: '```',
  end: '```'
}

export default () => md(markdown)``
