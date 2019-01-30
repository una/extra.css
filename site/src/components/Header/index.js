import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import style from './style.module.css'

const Header = ({ siteTitle }) => (
    <Link to="/">
      {siteTitle}
    </Link>
  </h1>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
