import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { extendMoment } from 'moment-range'

// Components
import WeekRow from './WeekRow'

// CSS
import '../../Calendar.scss'

class MonthGrid extends React.Component {
  getStartOfMonth () {
    const startOfMonth = moment(this.props.selectedDate).clone().startOf('month')
    const startDayOfWeek = startOfMonth.day()

    return startOfMonth.subtract(startDayOfWeek, 'day').format()
  }

  getEndOfMonth () {
    const endOfMonth = moment(this.props.selectedDate).clone().endOf('month')
    const endDayOfWeek = endOfMonth.day()

    return endOfMonth.add(6 - endDayOfWeek, 'day').format()
  }

  weekRanges () {
    const extendedMoment = extendMoment(moment)
    const range = extendedMoment
      .range(this.getStartOfMonth(), this.getEndOfMonth())
      .by('week')

    return Array.from(range)
  }

  render () {
    const rows = this.weekRanges()

    return (
      <div styleName='month-grid'>
        {
          rows.map(week => (
            <WeekRow
              key={week.format('YYYY-MM-DD')}
              week={week}
              selectedPeriod={this.props.selectedPeriod}
              appointments={this.props.appointments}
            />
          ))
        }
      </div>
    )
  }
}

const { object, string } = PropTypes

MonthGrid.propTypes = {
  selectedDate: object.isRequired,
  selectedPeriod: string.isRequired,
  appointments: object.isRequired
}

export default MonthGrid
