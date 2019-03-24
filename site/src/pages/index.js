import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CrossOut from '../components/Demos/CrossOut'
import ScallopedBorder from '../components/Demos/ScallopedBorder'
import SuperUnderline from '../components/Demos/SuperUnderline'
import Sparkles from '../components/Demos/Sparkles'
import style from './style.module.css'

export default class IndexPage extends Component {
  state = {
    noSupport: false
  }

  componentDidMount () {
    if (typeof window !== 'undefined' && !('paintWorklet' in window.CSS)) {
      this.setState({ noSupport: true })
    }
  }
  
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`houdini`, `css`, `library`, `extra.css`]} />
        {this.state.noSupport && (<p className={style.warning}>WARNING: Your browser does not currently support <a href="https://caniuse.com/#search=houdini">Houdini</a>, and you won't be able to see any demos 😢</p>)
        }
        <p className={style.intro}>A CSS <a href="http://ishoudinireadyyet.com">Houdini</a> library for making your site a little more <span>#extra</span>.</p>
        
        <div className={style.demos}>
          {/* All the demos */}
          <Sparkles />
          <ScallopedBorder />
          <SuperUnderline />
          <CrossOut />
        </div>
        
      </Layout>
    )
  }
}
