import React from 'react'
import PropTypes from 'prop-types'

// CSS
import '../Calendar.scss'

class RangeChanger extends React.Component {
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
      .clone()
      .weekday(0)
      .format('MMM D')

    const endOfWeek = this.props.selectedDate
      .clone()
      .weekday(6)
      .format('MMM D')

    return `${startOfWeek} - ${endOfWeek}`
  }

  parseDayText () {
    return this.props.selectedDate.format('dddd, MMM D')
  }

  stepCalendarBack = () => {
    const { selectedPeriod, changeDate, selectedDate } = this.props

    switch (selectedPeriod) {
      case 'month':
        return changeDate(selectedDate.clone().subtract(1, 'month').startOf('month'))
      case 'week':
        return changeDate(selectedDate.clone().subtract(1, 'week').startOf('week'))
      default:
        return changeDate(selectedDate.clone().subtract(1, 'day').startOf('day'))
    }
  }

  stepCalendarForward = () => {
    const { selectedPeriod, changeDate, selectedDate } = this.props

    switch (selectedPeriod) {
      case 'month':
        return changeDate(selectedDate.clone().add(1, 'month').startOf('month'))
      case 'week':
        return changeDate(selectedDate.clone().add(1, 'week').startOf('week'))
      default:
        return changeDate(selectedDate.clone().add(1, 'day').startOf('day'))
    }
  }

  render () {
    return (
      <div className='col-4' styleName='third range-changer'>
        <span className='fa fa-angle-left' styleName='range-angle left' onClick={this.stepCalendarBack} />
        <span styleName='current-date'>{this.currentDateText()}</span>
        <span className='fa fa-angle-right' styleName='range-angle right' onClick={this.stepCalendarForward} />
      </div>
    )
  }
}

const { string, object, func } = PropTypes

RangeChanger.propTypes = {
  selectedPeriod: string.isRequired,
  selectedDate: object.isRequired,
  changeDate: func.isRequired
}

export default RangeChanger
