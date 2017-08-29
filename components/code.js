import SyntaxHighlighter from 'react-syntax-highlighter'
import style from 'react-syntax-highlighter/dist/styles/atelier-lakeside-light'
import { string } from 'prop-types'

export const Code = ({ lang, children }) =>
  <SyntaxHighlighter language={lang} style={style}>
    {children.trim()}
  </SyntaxHighlighter>

Code.defaultProps = {
  lang: ''
}

Code.propTypes = {
  lang: string,
  children: string.isRequired
}

export default Code
