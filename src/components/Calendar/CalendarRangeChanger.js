import React from 'react'

// CSS
import './Calendar.css'

class CalendarRangeChanger extends React.Component {
  currentDateText () {
    switch (this.props.selectedPeriod) {
      case 'month':
        return this.parseMonthText()
      case 'week':
        return this.parseWeekText()
      default:
        return this.parseDayText()
    }
  }

  parseMonthText () {
    return this.props.selectedDate.format('MMMM YYYY')
  }

  parseWeekText () {
    const startOfWeek = this.props.selectedDate
      .weekday(0)
      .format('MMM D')

    const endOfWeek = this.props.selectedDate
      .weekday(6)
      .format('MMM D')

    return `${startOfWeek} - ${endOfWeek}`
  }

  parseDayText () {
    return this.props.selectedDate.format('dddd, MMM Do YYYY')
  }

  // stepCalendarBack = () => {
  //   switch (this.props.selectedPeriod) {
  //     case 'month':
  //       return this.props.changeDate(this.props.selectedDate.subtract(1, 'month'))
  //     default:
  //       return 'Hello'
  //   }
  // }

  render () {
    return (
      <div styleName='third range-changer'>
        <span className='fa fa-angle-left' />
        <span>{this.currentDateText()}</span>
        <span className='fa fa-angle-right' />
      </div>
    )
  }
}

const { string, object } = React.PropTypes

CalendarRangeChanger.propTypes = {
  selectedPeriod: string.isRequired,
  selectedDate: object.isRequired
}

export default CalendarRangeChanger
