import React from 'react'
import moment from 'moment'
import { extendMoment } from 'moment-range'

// Components
import HourCell from './HourCell'

// CSS
import '../../Calendar.css'

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

  render () {
    return (
      <div styleName='day-column'>{this.renderHours()}</div>
    )
  }
}

DayColumn.propTypes = {
  day: React.PropTypes.object.isRequired
}

export default DayColumn
