import md from 'markdown-in-js'
import Post from '../../../components/post'
import Code from '../../../components/code'
import { markdown, post, N } from '../options'

export default () =>
  <Post>{md(markdown)`
# Node.js: A Simple Install

There are a lot of tutorials that explain how to install Node.js, so why create another?
In my experience sharing those posts with friends, the tutorial tends to either under-explain
or over-complicate what you need to do to run your first script.

Let&rsquo;s see if we can simplify it.

# MacOS

## ${<N>1.</N>} Install Homebrew

## ${<N>2.</N>} Install Node with Homebrew

# Windows

## ${<N>1.</N>} Install node executable

# Linux

## ${<N>1.</N>}

`}</Post>