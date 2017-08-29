import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = ({ back }) =>
  <nav>
    <ul>
      <li className="logo">
        <h1>
          <Link prefetch href="/">
            <a>fouad</a>
          </Link>
        </h1>
      </li>
      {links.map(({ key, href, label }) =>
        <li key={key} className="link">
          <Link prefetch href={href}>
            <a>
              {label}
            </a>
          </Link>
        </li>
      )}
    </ul>

    <style jsx>{`
      :global(body) {
        background: #f8fbfd;
        margin: 0;
        font-family: Segment Circular Std, Helvetica Neue, Helvetica, Arial,
          sans-serif;
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
      @media (min-width: 1040px) {
        nav {
          position: fixed;
          top: 0;
          z-index: 10;
        }
      }
      & > ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      nav > ul {
        display: flex;
        flex-direction: column;
      }
      .logo {
        margin-bottom: 12px;
      }
      .link a {
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.5px;
        color: #aab9c6;
      }
      .link a:hover,
      .link a:focus {
        color: #067df7;
      }
      @media(max-width: 880px) {
        .logo h1,
        .link a {
          margin-left: auto;
          margin-right: auto;
        }
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
        transform: translate3d(0, 0, 0);
        transition: background .3s ease-out, opacity .3s ease-out,
          width .3s ease-out;
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
      h1 {
        margin: 48px 0 0;
        font-family: Georgia;
        font-weight: 300;
      }
      h1 a {
        color: #333;
        font-size: 48px;
      }
    `}</style>
  </nav>

export default Nav
