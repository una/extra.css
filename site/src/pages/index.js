import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CrossOut from '../components/Demos/CrossOut'
import ScallopedBorder from '../components/Demos/ScallopedBorder'
import SuperUnderline from '../components/Demos/SuperUnderline'
import Sparkles from '../components/Demos/Sparkles'
import style from './style.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`houdini`, `css`, `library`, `extra.css`]} />
    <p>A CSS <a href="http://ishoudinireadyyet.com">Houdini</a> library for making your site a little more <span>#extra</span>.</p>
    
    <div className={style.demos}>
      {/* All the demos */}
      <Sparkles />
      <ScallopedBorder />
      <SuperUnderline />
      <CrossOut />
    </div>
    
  </Layout>
)

export default IndexPage
