import React from 'react'
import PropTypes from 'prop-types'

// Components
import Appointment from './Appointment'

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
    return (
      this.props.appointments.map(appointment => (
        <Appointment appointment={appointment} key={appointment.id} />
      ))
    )
  }

  render () {
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
