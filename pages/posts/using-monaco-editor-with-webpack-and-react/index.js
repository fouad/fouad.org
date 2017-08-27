import md from 'markdown-in-js'
import Post from '../../../components/post'
import Code from '../../../components/code'
import { markdown, post } from '../options'

export default () =>
  <Post>{md(markdown)`
# Using Monaco Editor with Webpack and React

[Monaco Editor](https://github.com/microsoft/monaco-editor) is a new web-based
code editor by Microsoft that powers [Visual Studio Code](https://code.visualstudio.com/).
You might be familiar with editors like fully-featured [Ace](https://github.com/ajaxorg/ace) and
customizable, easy-to-use [CodeMirror](https://github.com/codemirror/CodeMirror).

Both are great choices for developing an in-browser code editor, so why consider
monaco to begin with?

${(
    <Code>{`
<MonacoEditor
  width="100%"
  height="100%"
  language="javascript"
  theme="vs"
  value={code}
  options={options}
  onChange={this.onChange}
  editorWillMount={this.editorWillMount}
  editorDidMount={this.editorDidMount}
/>
`}</Code>
  )}
`}</Post>
