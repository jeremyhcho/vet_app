import React from 'react'

// Components
import HourColumn from './HourColumn'
import DayColumn from './DayColumn'

// CSS
import '../../Calendar.css'

class DayGrid extends React.Component {
  renderGrid () {
    const { selectedDate } = this.props

    return (
      <DayColumn
        key={selectedDate.format('YYYY-MM-DD')}
        day={selectedDate}
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

DayGrid.propTypes = {
  selectedDate: React.PropTypes.object.isRequired
}

export default DayGrid
