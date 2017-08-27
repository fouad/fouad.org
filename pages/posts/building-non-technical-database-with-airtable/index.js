import md from 'markdown-in-js'
import Post from '../../../components/post'
import Code from '../../../components/code'
import { markdown, post } from '../options'

export default () =>
  <Post>{md(markdown)`
# Building a Non-Technical Database with Airtable
    `}</Post>
