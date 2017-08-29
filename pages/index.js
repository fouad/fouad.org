import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const posts = [
  // {
  //   url: 'posts/building-non-technical-database-with-airtable/',
  //   title: 'Building a Non-Technical Database with Airtable',
  //   time: 'Aug 2017',
  //   category: 'engineering'
  // },
  // {
  //   url: 'posts/using-monaco-editor-with-webpack-and-react/',
  //   title: 'Using Monaco Editor with Webpack and React',
  //   time: 'Aug 2017',
  //   category: 'code'
  // },
  {
    url: 'posts/design-for-people/',
    title: 'Design for People, not Problems',
    time: 'May 2017',
    category: 'design'
  },
  {
    url: 'posts/help-your-users-vote/',
    title: 'Help Your Users Vote',
    time: 'November 2016',
    category: 'politics'
  }
]

export default () =>
  <div>
    <Head title="Fouad Matin" />
    <Nav />

    <div className="hero slideInUp">
      <div>
        {posts.map(({ url, title, desc, category, time }) =>
          <Link key={url} href={url}>
            <a className="card">
              <h1>
                {title}
              </h1>
              {time &&
                <h3>
                  {time}{' '}
                  {category &&
                    <label className={category}>
                      {category}
                    </label>}
                </h3>}
              {desc &&
                <p>
                  {desc}
                </p>}
            </a>
          </Link>
        )}
      </div>
    </div>

    <style jsx>{`
      .hero {
        margin-top: 64px;
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
      .title,
      .description {
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
        box-shadow: 0 18px 43px rgba(0, 0, 0, .075);
        box-sizing: border-box;
        font-size: 16px;
        transition: border .25s ease-out, box-shadow .25s ease-out,
          transform .25s ease-out;
      }
      @media (min-width: 767px) {
        .card {
          max-width: 720px;
          padding: 48px 64px;
          font-size: 18px;
        }
      }
      .card:hover,
      .card:active {
        border-color: #067df7;
      }
      .card:hover h1,
      .card:active h1 {
        color: #067df7;
      }
      .card:hover {
        transform: translateY(-10px);
        box-shadow: 0 24px 53px rgba(0, 0, 0, .075);
      }
      .card:active {
        transform: translateY(5px);
        box-shadow: 0 24px 53px rgba(0, 0, 0, .075);
      }
      @media (max-width: 467px) {
        .card {
          margin: 0;
          width: 100%;
          border-radius: 0;
          border-color: rgba(0, 0, 0, 0);
        }
        .card:hover,
        .card:active {
          border-left-color: rgba(0, 0, 0, 0);
          border-right-color: rgba(0, 0, 0, 0);
          transform: none;
        }
      }
      .card h1 {
        margin-top: 0;
        line-height: 1.4;
      }
      .card h3 {
        margin: 0;
        color: #aab9c6;
        font-size: 18px;
        font-weight: 500;
      }
      .card label {
        display: inline-block;
        margin: -2px 0 0 16px;
        padding: 2px 6px;
        line-height: 20px;
        text-transform: uppercase;
        background: #cc3333;
        color: white;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.5px;
        border-radius: 4px;
        box-sizing: border-box;
      }
      .card label.engineering {
        background: #49b882;
      }
      .card label.design {
        background: #e365a6;
      }
      .card label.politics {
        background: #7c4dff;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
