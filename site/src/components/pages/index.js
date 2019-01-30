import React from 'react'
import Layout from '../components/Layout'
import TweetList from '../components/TweetList'
import SEO from '../components/seo'
import style from './style.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="#dailydevdollop" keywords={[`web development`, `daily dev dollop`, `daily`, `web dev`, `learn to code`, `learn development`, `developer links`, `developer resources`, `javascript`,`css`, `html`, `js`, `react`, `accessibility`, `web`]} />
    <p className={style.paraText}>Welcome to <span><a href="https://twitter.com/search?q=dailydevdollop">#dailydevdollop</a></span>! In an effort to consume and retain more web dev content, I've made a resolution to really read/watch/explore (not just skim!) one piece of dev-related content and share it on <a href="https://twitter.com/una">twitter</a> each day. Here's my progress!</p>
    <TweetList />
    <p className={style.paraText}>There would be a button here to get more tweets, but Twitter doesn't support search past 10 days on the standard API. So for now, <a href="https://twitter.com/search?f=tweets&vertical=default&q=%40una%20%23dailydevdollop&src=typd">click here to see the rest of the posts!</a></p>
  </Layout>
)

export default IndexPage
