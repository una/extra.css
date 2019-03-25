import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import './reset.css'
import style from './style.module.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
          {children}
          <footer className={style.footer}>
            Made with love by <a href="https://www.twitter.com/una">@una</a>
            <small>Background from this very cool site: <a href="https://svgbackgrounds.com">svgbackgrounds.com</a></small>
          </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
