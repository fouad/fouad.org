import Document, { Head, Main, NextScript } from 'next/document'
import { max as createSnippet } from '@segment/snippet'

const {
  // this write key is associated with https://segment.com/fouad/sources/fouad_org
  ANALYTICS_WRITE_KEY = '6zHbeEcU1wuGkPcyaaqUA5aOPSwT7hma'
} = process.env

export default class extends Document {
  static getInitialProps = Document.getInitialProps

  render () {
    return (
      <html>
        <Head>
          <script dangerouslySetInnerHTML={{
            __html: createSnippet({
              apiKey: ANALYTICS_WRITE_KEY,
              page: true // we'll fire `page` calls manually in `componentDidMount()`
            })
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
