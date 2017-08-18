import React from 'react'
import PropTypes from 'prop-types'

// CSS
import './Section.scss'

const Section = ({ header, children }) => (
  <div className='grid' styleName='section'>
    <div className='col-8' data-push-left='off-2' styleName='header'>
      <h3>{header}</h3>
    </div>

    <div className='col-8' data-push-left='off-2'>{children}</div>
  </div>
)

Section.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}

export default Section
