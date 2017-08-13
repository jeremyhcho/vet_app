import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { extendMoment } from 'moment-range'

// Components
import HourCell from './HourCell'
import Appointment from './Appointment'

// CSS
import '../../Calendar.scss'

class DayColumn extends React.Component {
  hourRanges () {
    const extendedMoment = extendMoment(moment)
    const startOfDay = this.props.day.clone().startOf('day')
    const endOfDay = this.props.day.clone().endOf('day')
    const range = extendedMoment.range(startOfDay, endOfDay).by('hour')

    return Array.from(range)
  }

  renderHours () {
    const hours = this.hourRanges()

    return hours.map(hour => (
      <HourCell hour={hour} key={hour.format('YYYY-MM-DD-h-a')} />
    ))
  }

  renderAppointments () {
    return (
      this.props.appointments.map(appointment => {
        return (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            isHourBased
          />
        )
      })
    )
  }

  render () {
    return (
      <div styleName='day-column'>
        {this.renderAppointments()}
        {this.renderHours()}
      </div>
    )
  }
}

const { object, array } = PropTypes

DayColumn.propTypes = {
  day: object.isRequired,
  appointments: array.isRequired
}

export default DayColumn
