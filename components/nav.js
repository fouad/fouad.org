import Link from 'next/link'

const links = [
  // { href: 'https://github.com/fouad', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = ({ back }) => (
  <nav>
    <ul>
      <li>
        {back ? (
          <Link prefetch href='/'>
            <a>&larr; Back Home</a>
          </Link>
        ) : (
          <Link prefetch href='/'>
            <a>Home</a>
          </Link>
        )}
      </li>
      <ul>
        {links.map(
          ({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        background: #f8fbfd;
        margin: 0;
        font-family: Segment Circular Std,Helvetica Neue,Helvetica,Arial,sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: -.2px;
        height: 100%;
        color: #3d556b;
        -webkit-font-smoothing: antialiased;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        font-size: 13px;
      }
      :global(h1, h2, h3, h4, h5) {
        color: #00376e;
      }
      :global(a) {
        display: inline-block;
        position: relative;
        color: #0189ff;
        text-decoration: none;
      }
      :global(a.animated::after) {
        position: absolute;
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #0189ff;
        transform: translate3d(0,0,0);
        transition: background .3s ease-out, opacity .3s ease-out, width .3s ease-out;
      }
      :global(a.animated:hover::after) {
        width: 100%;
      }
      @keyframes slideInUp {
        from {
          transform: translate3d(0, 15%, 0);
          visibility: visible;
          opacity: 0;
        }

        to {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }
      }
      :global(.slideInUp) {
        animation-name: slideInUp;
        animation-duration: 1s;
        animation-fill-mode: both;
        transition: opacity .15s ease-out, transform .15s ease-out;
      }
    `}</style>
  </nav>
)

export default Nav
