import React from 'react'
import PropTypes from 'prop-types'

// CSS
import '../../Calendar.scss'

class DayCell extends React.Component {
  parseRenderText () {
    if (this.props.selectedPeriod === 'week') {
      return null
    }

    return this.props.day.format('D')
  }

  renderAppointments () {

  }

  render () {
    console.log(this.props.appointments)
    return (
      <div styleName='day-cell'>
        {this.parseRenderText()}

        <div>
          {this.renderAppointments()}
        </div>
      </div>
    )
  }
}

const { object, string, array } = PropTypes

DayCell.propTypes = {
  day: object.isRequired,
  selectedPeriod: string.isRequired,
  appointments: array.isRequired
}

export default DayCell
