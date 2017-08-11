import React from 'react'
import moment from 'moment'

// CSS
import './Calendar.css'

class CalendarColumnHeaders extends React.Component {
  parseColumnHeaders () {
    switch (this.props.selectedPeriod) {
      case 'month':
        return this.parseMonthColumns()
      case 'week':
        return this.parseWeekColumns()
      default:
        return this.parseDayColumns()
    }
  }

  parseMonthColumns () {
    return (
      moment.weekdaysShort().map(day => (
        <li key={day}>{day}</li>
      ))
    )
  }

  parseWeekColumns () {
    const startOfWeek = this.props.selectedDate.startOf('week')
    const days = []

    for (let i = 0; i < 7; i++) {
      days.push(moment(startOfWeek).add(i, 'days').format('ddd M/D'))
    }

    return (
      days.map(day => (
        <li key={day}>{day}</li>
      ))
    )
  }

  parseDayColumns () {
    return `${this.props.selectedDate.format('dddd M/D')}`
  }

  render () {
    return (
      <ul styleName='column-headers'>
        { this.parseColumnHeaders() }
      </ul>
    )
  }
}

const { string, object } = React.PropTypes

CalendarColumnHeaders.propTypes = {
  selectedPeriod: string.isRequired,
  selectedDate: object.isRequired
}

export default CalendarColumnHeaders
