import React from 'react'

// CSS
import './Calendar.css'

// Components
import CalendarRangeSelector from './CalendarRangeSelector'
import CalendarRangeChanger from './CalendarRangeChanger'

class CalendarHeader extends React.Component {
  render () {
    const { selectedPeriod, changePeriod, selectedDate } = this.props

    return (
      <div styleName='header'>
        <CalendarRangeSelector
          selectedPeriod={selectedPeriod}
          changePeriod={changePeriod}
        />
        <CalendarRangeChanger
          selectedPeriod={selectedPeriod}
          selectedDate={selectedDate}
        />
        <div styleName='third' />
      </div>
    )
  }
}

const { string, func, object } = React.PropTypes

CalendarHeader.propTypes = {
  selectedPeriod: string.isRequired,
  selectedDate: object.isRequired,
  changePeriod: func.isRequired
}

export default CalendarHeader
