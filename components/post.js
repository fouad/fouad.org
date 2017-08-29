import Head from './head'
import Nav from './nav'

export default ({ title, children, style }) => (
  <div>
    <Head title={title} />

    <Nav back />

    <div className='post slideInUp' style={style}>{children}</div>

    <style jsx>{`
      .post {
        display: block;
        width: 100%;
        max-width: 620px;
        padding: 32px;
        margin: 64px auto 64px;
        background: #fff;
        box-shadow: 0 18px 43px rgba(0,0,0,.075);
        box-sizing: border-box;
        font-size: 16px;
      }
      .post :global(h1),
      .post :global(h2),
      .post :global(h3),
      .post :global(h4),
      .post :global(h5) {
        color: #293C4B;
        font-weight: 400;
        max-width: 80%;
        line-height: 44px;
      }
      .post :global(h1) {
        font-weight: 700;
        color: #00376e;
      }
      .post :global(p) {
        line-height: 30px;
        font-weight: 400;
      }
      .post :global(code),
      .post :global(pre) {
        font-size: 12px;
        line-height: 20px;
      }
      @media(min-width: 767px) {
        .post {
          width: 98%;
          max-width: 740px;
          padding: 32px 72px;
          font-size: 18px;
          border-radius: 6px;
          overflow: hidden;
        }
        .post :global(h1),
        .post :global(h2),
        .post :global(h3),
        .post :global(h4),
        .post :global(h5) {
          max-width: 90%;
        }
      }
    `}</style>
  </div>
)
