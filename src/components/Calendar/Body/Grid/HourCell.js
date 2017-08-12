import React from 'react'
import PropTypes from 'prop-types'

// CSS
import '../../Calendar.scss'

class HourCell extends React.Component {
  render () {
    return (
      <div>
        <div styleName='half-hour' />
        <div styleName='half-hour' />
      </div>
    )
  }
}

HourCell.propTypes = {
  hour: PropTypes.object.isRequired
}

export default HourCell
