import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

// CSS
import '../Calendar.css'

class ColumnHeaders extends React.Component {
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
    const startOfWeek = this.props.selectedDate.clone().startOf('week')
    const days = []

    for (let i = 0; i < 7; i++) {
      days.push(startOfWeek.clone().add(i, 'days').format('ddd M/D'))
    }

    return (
      days.map(day => (
        <li styleName='week-column-header' key={day}>{day}</li>
      ))
    )
  }

  parseDayColumns () {
    return <li styleName='day-column-header'>{`${this.props.selectedDate.format('dddd M/D')}`}</li>
  }

  shouldRenderHourColumn () {
    return ['week', 'day'].includes(this.props.selectedPeriod)
  }

  renderHourColumn () {
    return (
      <li styleName='hour-column-header' />
    )
  }

  render () {
    return (
      <ul>
        {this.shouldRenderHourColumn() && this.renderHourColumn()}
        {this.parseColumnHeaders()}
      </ul>
    )
  }
}

const { string, object } = PropTypes

ColumnHeaders.propTypes = {
  selectedPeriod: string.isRequired,
  selectedDate: object.isRequired
}

export default ColumnHeaders
