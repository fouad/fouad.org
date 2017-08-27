import md from 'markdown-in-js'
import Post from '../components/post'
import { markdown, post } from './posts/options'

const work = [
  {
    url: 'https://segment.com',
    name: 'Segment',
    color: 'green',
    type: 'Engineering Lead',
    desc: 'API for Customer Data'
  },
  {
    url: 'https://voteplz.org',
    name: 'VotePlz',
    color: 'blue',
    type: 'Founder',
    desc: 'Help young people vote'
  },
  {
    url: 'https://strongintro.com',
    name: 'StrongIntro',
    color: 'purple',
    type: 'Founder',
    desc: 'Leverage your network'
  },
  {
    url: 'https://classdojo.com',
    name: 'ClassDojo',
    color: 'dark-green',
    type: 'Engineering Intern',
    desc: 'Positive behavior for kids'
  },
  {
    url: 'https://speek.com',
    name: 'Speek',
    color: 'light-blue',
    type: 'Engineering Lead',
    desc: 'Free conference calls with WebRTC & custom VoIP'
  }
]

const borderBox = {
  boxSizing: 'border-box'
}

export default () =>
  <Post title='Fouad Matin — Work'>
    <div className="flex flex-row flex-wrap">
      {work.map(({ url, name, color, type, desc }) =>
        <a
          key={`work--${url}`}
          href={url}
          target="_blank"
          className={`db link fw5 br3 w-50-ns bt3 black pointer pa2 hover-${color}`}
          style={borderBox}
        >
          <h3 className={`dib fw6 mv2 f3 bb bw1 pb1 b--${color}`}>{name}</h3>
          <span className="db mb2 black-80">{type}</span>{' '}
          <span className="db black-50">{desc}</span>
        </a>
      )}
    </div>
  </Post>
