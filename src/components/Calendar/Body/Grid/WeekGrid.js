import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { extendMoment } from 'moment-range'

// Components
import DayColumn from './DayColumn'
import HourColumn from './HourColumn'

// CSS
import '../../Calendar.scss'

class WeekGrid extends React.Component {
  weekRange () {
    const { selectedDate } = this.props

    const startOfWeek = selectedDate.clone().startOf('week')
    const endOfWeek = selectedDate.clone().endOf('week')
    const extendedMoment = extendMoment(moment)
    const range = extendedMoment.range(startOfWeek, endOfWeek).by('day')

    return Array.from(range)
  }

  appointmentsByDay (day) {
    return this.props.appointments[moment(day).format('YYYY-MM-DD')] || []
  }

  renderGrid () {
    const days = this.weekRange()

    return (
      days.map(day => (
        <DayColumn
          key={day.format('YYYY-MM-DD')}
          day={day}
          appointments={this.appointmentsByDay(day)}
        />
      ))
    )
  }

  render () {
    return (
      <div styleName='week-grid'>
        <HourColumn />
        {this.renderGrid()}
      </div>
    )
  }
}

const { object } = PropTypes

WeekGrid.propTypes = {
  selectedDate: object.isRequired,
  appointments: object.isRequired
}

export default WeekGrid
