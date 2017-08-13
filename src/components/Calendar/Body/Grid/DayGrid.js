import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

// Components
import HourColumn from './HourColumn'
import DayColumn from './DayColumn'

// CSS
import '../../Calendar.scss'

class DayGrid extends React.Component {
  appointmentsByDay (day) {
    return this.props.appointments[moment(day).format('YYYY-MM-DD')] || []
  }

  renderGrid () {
    const { selectedDate } = this.props

    return (
      <DayColumn
        key={selectedDate.format('YYYY-MM-DD')}
        day={selectedDate}
        appointments={this.appointmentsByDay(selectedDate)}
      />
    )
  }

  render () {
    return (
      <div styleName='day-grid'>
        <HourColumn />
        {this.renderGrid()}
      </div>
    )
  }
}

const { object } = PropTypes

DayGrid.propTypes = {
  selectedDate: object.isRequired,
  appointments: object.isRequired
}

export default DayGrid
