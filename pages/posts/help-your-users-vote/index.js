import md from 'markdown-in-js'
import Post from '../../../components/post'
import { markdown, post } from '../options'

export default () => <Post>{md(markdown)`
# Help Your Users Vote

In 2012, there were over 20 million registered voters who did not vote — many of these people are probably your users.

Unfortunately, most people don’t know about early voting, which is why 28% of Americans don’t vote because they’re “too busy.”

With less than a week to Election Day, over 22 million Americans have already voted. In over 30 states, you can vote early as of today. In some states you can even register to vote at the same time.

**We’re asking all tech companies to help your users vote.**

Over the past few weeks, we’ve built a few tools to make it as easy as possible to get out and vote and we could really use your help in getting them into your users’ hands.

Here are the tools:

1. [Early voting tool](https://www.voteplz.org/vote/early/?utm_campaign=blogpost&utm_source=medium&utm_medium=referral)
2. [Polling place finder](https://www.voteplz.org/vote/polls/?utm_campaign=blogpost&utm_source=medium&utm_medium=referral)
3. [See your ballot tool](https://www.voteplz.org/vote/ballot/?utm_campaign=blogpost&utm_source=medium&utm_medium=referral)

Here are easy, high-impact ways you can help:

### As soon as possible

- Send push notifications to users in key states letting them know that early voting is open, and they can vote today.
- Add a call-to-action that helps people find their polling place or vote early.

### On Election Day

- Message users with a reminder to vote via push notification or email
- Add a call-to-action that helps users find their polling place

Here’s an [example banner with html/css to use](http://jsbin.com/nilurugeye/1/edit?html,css,output).

You can get more details [here](https://docs.google.com/document/d/1-rZuXI5kroKYo_ETHGpx3YY6YNLUrXF_SByyGmwFEL4/edit#) on all of these options. Email us for help in getting setup or any questions. Also, check out other examples from [our awesome partners](https://www.voteplz.org/partners/)!

**We need your help.**

This is personally my first presidential election, as it is for millions of young Americans. Most young people use products built by great tech companies, so it is imperative that we work together and provide tools to make voting seem as easy as calling an Uber.
Please share these tools with your users and let’s get out the vote!

— Fouad & the VotePlz Team
`}</Post>
