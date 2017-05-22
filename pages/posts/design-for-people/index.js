import md from 'markdown-in-js'
import Post from '../../../components/post'
import { markdown, post } from '../options'

export default () => <Post>{md(markdown)`
# Design for People, not Problems

The first step of any project is defining the problem, then deciding on your unique approach to fix the issue for someone.
After a few years of building products, I realized that  my method usually amounted to determining a checklist of functionality and checking off boxes. I was also learning how to build products, so this usually came after searching for the task on Google, StackOverflow & Dribbble for inspiration.

The result was an amalgamation of features that hopefully solved the problem—assuming you knew how to use all the features, including the ones I added last-minute since you’d mentioned it!
Then came the “rapid iteration” phase where I’d just watch users try out the product for an hour to see where they didn’t understand how to use it and note ideas on how to improve the process for the user.
Maybe it took 5 clicks and 3 page changes to achieve a goal… Ok, let’s put those options in a modal and add defaults so it’s just one click.
Iterating on the product meant watching how users fit the product into their process, then figuring out how to incorporate that process into the product.

One day, it occurred to me; I‘ve been doing it wrong.
I’d ask users what were their “pain points”, I’d build a product then wait to see how users used this bespoke tool I’d built just for them.
Then it didn’t work. Reasons included:
“I couldn’t find the button to do what I wanted”
“I didn’t have enough time and had to run to a meeting”
“Are you able to support FEATURE_X? Where do I find that?”
They’d proceed to use some clearly inferior product, lacking the numerous features I’d added at the user’s request, and get the job done.

Good products address the functional concerns of the user. Great products understand who is the user and help them achieve their goal.
Now, I start projects by identifying who’s going to use the tool, what is each person’s goal & designing the process how they achieve that goal.
For each user persona: what are they looking to achieve with the product and how does it fit into larger goals? Is it a push or a pull experience? What’s the least they need to see when they come to the app? Do they sign in every day for 5 minutes or once a week for 30 minutes?
It’s easy to focus on just the functional requirements to get something out the door, and lose sight of how the product actually works in a user’s hands.
When designing, decide on the problem. Then design a workflow for the people who need to solve that problem.

**Recommended Reading**

[Humane Interface](#) by Jef Raskin

_I considered quoting this book multiple times while writing this post. It’s just so good — I recommend you just purchase it and use it as a glossary._

[Before You Grow](#) by Sam Altman

[Walking Through the Design Process](#) by Ian Taylor

[Be Good](#) by Paul Graham
`}</Post>
