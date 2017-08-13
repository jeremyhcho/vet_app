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
    appointments: {
      '2017-08-12': [
        {
          id: 1,
          name: 'Jeremy Cho',
          from: '2017-08-12T14:00:00-07:00',
          to: '2017-08-12T15:00:00-07:00'
        },
        {
          id: 2,
          name: 'Esther Lim',
          from: '2017-08-12T14:15:00-07:00',
          to: '2017-08-12T16:30:00-07:00'
        }
      ],
      '2017-09-01': [
        {
          id: 3,
          name: 'Jeremy Cho',
          from: '2017-09-01T16:00:00-07:00',
          to: '2017-09-01T17:30:00-07:00'
        }
      ]
    }
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
