import md from 'markdown-in-js'
import Link from 'next/link'
import Post from '../components/post'
import Card from '../components/card'
import { markdown, post } from './posts/options'

const cardStyle = { padding: 0, maxHeight: 286 }

export default () =>
  <div>
    <Post title="Fouad Matin — Contact" style={{ padding: 0 }}>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shr4D67oy6iNQZHgR?backgroundColor=cyan"
        frameBorder={0}
        width="100%"
        height={640}
        onMouseWheel=""
        style={{
          display: 'block',
          background: 'transparent',
          border: 'none'
        }}
      />
    </Post>
  </div>
