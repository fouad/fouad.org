import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const posts = [
  {
    url: 'posts/design-for-people/',
    title: 'Design for People, not Problems',
    time: 'May 2017'
  }, {
    url: 'posts/help-your-users-vote/',
    title: 'Help Your Users Vote',
    time: 'November 2016'
  }
]

export default () => (
  <div>
    <Head title='Home' />
    <Nav />

    <div className='hero slideInUp'>
      <div>
        {posts.map(post =>
          <Link key={post.url} href={post.url}>
            <a className='card'>
              <h1>{post.title}</h1>
              {post.time && <h3>{post.time}</h3>}
              {post.desc && <p>{post.desc}</p>}
            </a>
          </Link>
        )}
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title, .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        display: block;
        width: 95%;
        max-width: 620px;
        padding: 32px;
        border-radius: 6px;
        margin: 0 auto 64px;
        border: 1px solid transparent;
        background: #fff;
        box-shadow: 0 18px 43px rgba(0,0,0,.075);
        box-sizing: border-box;
        font-size: 16px;
        transition: border .25s ease-out, box-shadow .25s ease-out, transform .25s ease-out;
      }
      @media(min-width: 767px) {
        .card {
          max-width: 720px;
          padding: 32px 64px;
          font-size: 18px;
        }
      }
      .card:hover {
        border-color: #067df7;
        transform: translateY(-10px);
        box-shadow: 0 24px 53px rgba(0,0,0,.075);
      }
      .card:active {
        border-color: #067df7;
        transform: translateY(5px);
        box-shadow: 0 24px 53px rgba(0,0,0,.075);
      }
      .card h3 {
        margin: 0;
        color: #aab9c6;
        font-size: 18px;
        font-weight: 500;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)
