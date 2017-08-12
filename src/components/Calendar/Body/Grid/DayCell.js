import React from 'react'
import PropTypes from 'prop-types'

// CSS
import '../../Calendar.css'

class DayCell extends React.Component {
  parseRenderText () {
    if (this.props.selectedPeriod === 'week') {
      return null
    }

    return this.props.day.format('D')
  }

  render () {
    return (
      <div styleName='day-cell'>
        {this.parseRenderText()}
      </div>
    )
  }
}

const { object, string } = PropTypes

DayCell.propTypes = {
  day: object.isRequired,
  selectedPeriod: string.isRequired
}

export default DayCell
