import md from 'markdown-in-js'
import Link from 'next/link'
import Post from '../components/post'
import Card from '../components/card'
import { markdown, post } from './posts/options'

const cardStyle = { padding: 0 }

export default () =>
<div>
  <Post title='Fouad Matin — About'>
    <h1>Hello! I&rsquo;m an SF-based engineer &amp; designer working to improve how we learn, energy security and civic engagement.
    </h1>
  </Post>

  {/*
  <Card style={cardStyle} row spaceBetween>
    <div className="pa4">
      <h2 className="mv0">
        I grew up in Virginia, right outside of D.C. Six years out and I still have a Capitol Hill information addiction.
      </h2>
    </div>
    <img src="https://images.unsplash.com/photo-1477883698909-609a36c330a0?dpr=2.5&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=" className="image" />
  </Card>

  <Card style={cardStyle} row spaceBetween>
    <img src="https://images.unsplash.com/photo-1490598000245-075175152d25?dpr=2.5&auto=format&fit=crop&w=1199&h=800&q=80&cs=tinysrgb&crop=" className="image" />
    <div className="pa4">
      <h2 className="mv0">
        Now, I live in the San Francisco Bay Area. And I can&rsquo;t imagine living anywhere else for at least a few years.
      </h2>
    </div>
  </Card>
  */}

  <Card>
    <h1>Want to talk about something? <Link href="/contact"><a>Let me know!</a></Link></h1>
  </Card>

  <style jsx>{`
    & :global(.image) {
      width: 100%;
      height: 100%;
      max-height: 286px;
    }
    @media(min-width: 767px) { 
      & :global(.image) {
        width: 50%;
      }
    }
  `}</style>
</div>
