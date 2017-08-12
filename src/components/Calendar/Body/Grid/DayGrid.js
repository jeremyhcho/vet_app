import React from 'react'
import PropTypes from 'prop-types'

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
    console.log(this.props.appointments)
    return (
      <div styleName='day-grid'>
        <HourColumn />
        {this.renderGrid()}
      </div>
    )
  }
}

const { object, array } = PropTypes

DayGrid.propTypes = {
  selectedDate: object.isRequired,
  appointments: array.isRequired
}

export default DayGrid
