import cx from 'classnames'

export default ({ children, style, row, spaceBetween }) => (
  <div className={cx({
    'card slideInUp': true,
    row,
    spaceBetween
  })} style={style}>
    {children}

    <style jsx>{`
      .card {
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
      .card :global(h1),
      .card :global(h2),
      .card :global(h3),
      .card :global(h4),
      .card :global(h5) {
        color: #293C4B;
        font-weight: 400;
        max-width: 80%;
        line-height: 44px;
      }
      .card :global(h1) {
        font-weight: 700;
        color: #00376e;
      }
      .card :global(p) {
        line-height: 30px;
        font-weight: 400;
      }
      @media(min-width: 767px) {
        .card {
          width: 98%;
          max-width: 740px;
          padding: 32px 72px;
          font-size: 18px;
          border-radius: 6px;
          overflow: hidden;
        }
        .card :global(h1),
        .card :global(h2),
        .card :global(h3),
        .card :global(h4),
        .card :global(h5) {
          max-width: 90%;
        }
      }
      .row {
        display: flex;
        flex-direction: row;
      }
      .spaceBetween {
        justify-content: space-between;
      }
      @media(max-width: 767px) {
        .row {
          flex-wrap: wrap;
        }
      }
    `}</style>
  </div>
)
