import React from 'react'

// Components
import MonthGrid from './MonthGrid'
import WeekGrid from './WeekGrid'
import DayGrid from './DayGrid'

// CSS
import '../../Calendar.css'

class Grid extends React.Component {
  renderGrid () {
    const { selectedPeriod, selectedDate } = this.props

    switch (selectedPeriod) {
      case 'month':
        return (
          <MonthGrid
            selectedDate={selectedDate}
            selectedPeriod={selectedPeriod}
          />
        )
      case 'week':
        return <WeekGrid selectedDate={selectedDate} />
      default:
        return <DayGrid selectedDate={selectedDate} />
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

const { string, object } = React.PropTypes

Grid.propTypes = {
  selectedPeriod: string.isRequired,
  selectedDate: object.isRequired
}

export default Grid
