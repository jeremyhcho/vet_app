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
              appointments={this.props.appointments}
            />
          ))
        }
      </div>
    )
  }
}

const { object, string, array } = PropTypes

WeekRow.propTypes = {
  week: object.isRequired,
  selectedPeriod: string.isRequired,
  appointments: array.isRequired
}

export default WeekRow
