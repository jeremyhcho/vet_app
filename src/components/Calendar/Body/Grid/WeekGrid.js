import React from 'react'
import moment from 'moment'
import { extendMoment } from 'moment-range'

// Components
import DayColumn from './DayColumn'
import HourColumn from './HourColumn'

// CSS
import '../../Calendar.css'

class WeekGrid extends React.Component {
  weekRange () {
    const { selectedDate } = this.props

    const startOfWeek = selectedDate.clone().startOf('week')
    const endOfWeek = selectedDate.clone().endOf('week')
    const extendedMoment = extendMoment(moment)
    const range = extendedMoment.range(startOfWeek, endOfWeek).by('day')

    return Array.from(range)
  }

  renderGrid () {
    const days = this.weekRange()

    return (
      days.map(day => (
        <DayColumn key={day.format('YYYY-MM-DD')} day={day} />
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

WeekGrid.propTypes = {
  selectedDate: React.PropTypes.object.isRequired
}

export default WeekGrid
