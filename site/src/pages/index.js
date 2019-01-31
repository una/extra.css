import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Header from '../components/Header'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`houdini`, `css`, `library`, `extra.css`]} />
    <Header />
    <p>A CSS <a href="http://ishoudinireadyyet.com">Houdini</a> library for making your site a little more extra.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
