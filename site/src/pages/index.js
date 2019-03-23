import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CrossOut from '../components/Demos/CrossOut'

// const sampleObj = (sample) => {
//   const sampleFolder = `../../../samples/${sample}`
//   const sampleIndex = `${sampleFolder}/index.html`
//   const sampleProps = `${sampleFolder}/properties.js`
//   const sampleStyle = `${sampleFolder}/style.css`
//   const sampleWorklet = `${sampleFolder}/worklet.js`

//   return {
//     sampleIndex,
//     sampleProps,
//     sampleStyle,
//     sampleWorklet
//   }
// }

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`houdini`, `css`, `library`, `extra.css`]} />
    <p>A CSS <a href="http://ishoudinireadyyet.com">Houdini</a> library for making your site a little more extra.</p>
    
    {/* All the demos */}
    <CrossOut />
    
  </Layout>
)

export default IndexPage
