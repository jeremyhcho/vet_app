import React from 'react'
import PropTypes from 'prop-types'

import './Section.scss'

const Section = ({ header, children }) => (
  <div styleName='section'>
    <div styleName='header'>{header}</div>
    <div styleName='body'>{children}</div>
  </div>
)

Section.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
}

export default Section
