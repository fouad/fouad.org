import md from 'markdown-in-js'
import Post from '../../../components/post'
import Code from '../../../components/code'
import { markdown, post, N } from '../options'

export default () =>
  <Post>{md(markdown)`
# Non-Technical Databases

One of the most common tasks that I've had to do when building a new product is creating a way for 
collaborators to easily contribute or manage data. [Django](https://djangoproject.com) makes this
really easy with [Django admin site](https://docs.djangoproject.com/en/1.11/ref/contrib/admin/) which
works out-of-the-box with any Django app. But what if you don't need Django? Or use python for that matter.

You have a script that opens a website, grabs a few pieces of information and then stores them so a teammate
can edit or add something before it's used as a checklist by someone else.

There are a few non-technical databases that you can use to get up-n-running without writing any complicated 
server code to sync with a database. You can focus on the work or the automation, not the glue in between.

Some options are [Fieldbook](https://fieldbook.com) and [Airtable](https://airtable.com). Today we're going to
explore Airtable, but you'll be able to accomplish the same tasks with either.

## ${<N>1.</N>} Design your workflow

Some processes I've automated with this setup are contractor hiring, event RSVP management and personal pet
projects where I don't really want to think about keeping a server working. For simplicity in this post, we're
going to stick to the last category.

Let's say I want a list of the most-watched players of a game on [Twitch](https://twitch.tv) so that a friend and I
can rank our favorites and publish our list once a week along with our favorite clip.

Without any tooling, this would look something like us messaging our favorites as we spot them and hopefully remember to 
send info to each other. Then once a week, we comb through our messages looking for people that we'd sent and distinguishing
top 10 clips from irrelevant videos.

Instead, we want this data to be structured as we collect it and ideally we don't even have to manually copy-paste streamer
usernames and profile pictures.

We&rsquo;ll save the coding for later but now we know what we want a table that refreshes when we want with streamers&rsquo;:
  - Name
  - Featured stream name
  - Number of viewers
  - Links to past streams

Great! Now let&rsquo;s create an Airtable with that structure.

## ${<N>2.</N>} Sign up for Airtable

We&rsquo;ll need an account which you can create at [airtable.com/signup](https://airtable.com/invite/r/6mcUvD5q) —
go through their tutorial and create your first base.

## ${<N>3.</N>} Create a base

Now it's time to structure our data. Create a Base called **Top 10 Streamers** with our columns from before: *name*
, *featured_stream_url*, *stream_viewer_count* and *past_stream_urls*.

It should look something like this:

![Airtable initial config screenshot](https://i.imgur.com/WG8l9vx.png)

## ${<N>4.</N>} Write your scripts 

Next up we&rsquo;re going to automate the task of pulling streamers&rsquo; videos and info. In this example, I'm going
to use JavaScript simply because that's my go-to scripting language, but you can use anything you want.

*Note: Airtable's documentation only has examples in JavaScript but there are community-built libraries for other languages.*

Make sure you have Node.js installed and you&rsquo;re on version 8 or above. [Follow this guide to set up Node](/posts/nodejs-a-simple-install).

${(
    <Code language='shell'>{`
npm init
npm install --save airtable nightmare
`}</Code>
  )}

${(
    <Code>{`
const Nightmare = require('nightmare')
const airtable = require('airtable')

airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY || 'KEY' })

const base = airtable.base(process.env.AIRTABLE_BASE || 'BASE')
const ni = new Nightmare({ show: false })
const url = \`https://www.twitch.tv/directory/game/PLAYERUNKNOWN'S%20BATTLEGROUNDS\`

async function run() {
  const streamers = await ni
    .goto(url)
    .evaluate(() => {
      const toArray = list => [].slice.call(list)
      const streams = toArray(document.querySelectorAll('.qa-stream-preview'))
      const results = []

      function getDataForStream(stream) {
        const streamer_url = stream.querySelector('a.js-card-thumb').href
        const info = stream.querySelector('.card__info').innerText
        const featured_stream_viewer_count = /\d*,?\d*/.exec(info)[0]
        const name = stream.querySelector('.js-channel-link').innerText

        return {
          name,
          streamer_url,
          streamer_clips_url: streamer_url + '/clips',
          featured_stream_viewer_count
        }
      }

      return streams.map(getDataForStream)
    })
    .end()

  streamers.forEach(streamer => {
    base('Streamers').create(streamer, { typecast: true })
  })

  console.log(streamers)
}

run()
`}</Code>)}

## ${<N>5.</N>}Connect your workflow

TBD

## What comes next?

TBD
`}</Post>
