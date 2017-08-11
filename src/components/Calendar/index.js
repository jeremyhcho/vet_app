import React from 'react'
import moment from 'moment'

// CSS
import './Calendar.css'

// Components
import CalendarHeader from './CalendarHeader'
import CalendarBody from './CalendarBody'
import CalendarFooter from './CalendarFooter'

class Calendar extends React.Component {
  state = {
    selectedPeriod: 'month',
    selectedDate: moment()
  }

  changePeriod = (selectedPeriod) => {
    return () => this.setState({ selectedPeriod })
  }

  render () {
    const { selectedPeriod, selectedDate } = this.state

    return (
      <div styleName='wrapper'>
        <CalendarHeader
          selectedPeriod={selectedPeriod}
          selectedDate={selectedDate}
          changePeriod={this.changePeriod}
        />
        <CalendarBody
          selectedPeriod={selectedPeriod}
          selectedDate={selectedDate}
        />
        <CalendarFooter />
      </div>
    )
  }
}

export default Calendar
