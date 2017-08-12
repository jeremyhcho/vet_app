import React from 'react'

// CSS
import '../../Calendar.css'

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
  hour: React.PropTypes.object.isRequired
}

export default HourCell
