import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { extendMoment } from 'moment-range'

// Components
import DayCell from './DayCell'

// CSS
import '../../Calendar.scss'

class WeekRow extends React.Component {
  getDays () {
    const startOfWeek = this.props.week.clone()
    const endOfWeek = moment(startOfWeek.clone().endOf('week'))
    const extendedMoment = extendMoment(moment)

    const range = extendedMoment
      .range(startOfWeek, endOfWeek)
      .by('day')

    return Array.from(range)
  }

  appointmentsByDay (day) {
    return this.props.appointments[moment(day).format('YYYY-MM-DD')] || []
  }

  render () {
    const days = this.getDays()

    return (
      <div styleName='week'>
        {
          days.map(day => (
            <DayCell
              key={day.format('YYYY-MM-DD')}
              day={day}
              selectedPeriod={this.props.selectedPeriod}
              appointments={this.appointmentsByDay(day)}
            />
          ))
        }
      </div>
    )
  }
}

const { object, string } = PropTypes

WeekRow.propTypes = {
  week: object.isRequired,
  selectedPeriod: string.isRequired,
  appointments: object.isRequired
}

export default WeekRow
