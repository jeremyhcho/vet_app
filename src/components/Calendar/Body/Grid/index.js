import React from 'react'
import PropTypes from 'prop-types'

// Components
import MonthGrid from './MonthGrid'
import WeekGrid from './WeekGrid'
import DayGrid from './DayGrid'

// CSS
import '../../Calendar.scss'

class Grid extends React.Component {
  state = {
    appointments: [
      {
        name: 'Jeremy Cho',
        from: 'Sat Aug 12 2017 12:00 GMT-0700',
        to: 'Sat Aug 12 2017 1:00 GMT-0700'
      },
      {
        name: 'Esther Lim',
        from: 'Sat Aug 12 2017 1:30 GMT-0700',
        to: 'Sat Aug 12 2017 3:00 GMT-0700'
      }
    ]
  }

  renderGrid () {
    const { selectedPeriod, selectedDate } = this.props

    switch (selectedPeriod) {
      case 'month':
        return (
          <MonthGrid
            selectedDate={selectedDate}
            selectedPeriod={selectedPeriod}
            appointments={this.state.appointments}
          />
        )
      case 'week':
        return (
          <WeekGrid
            selectedDate={selectedDate}
            appointments={this.state.appointments}
          />
        )
      default:
        return (
          <DayGrid
            selectedDate={selectedDate}
            appointments={this.state.appointments}
          />
        )
    }
  }

  render () {
    return (
      <div styleName='grid'>
        {this.renderGrid()}
      </div>
    )
  }
}

const { string, object } = PropTypes

Grid.propTypes = {
  selectedPeriod: string.isRequired,
  selectedDate: object.isRequired
}

export default Grid
