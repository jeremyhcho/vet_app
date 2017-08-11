import React from 'react'

// Components
import CalendarColumnHeaders from './CalendarColumnHeaders'

// CSS
import './Calendar.css'

class CalendarBody extends React.Component {
  render () {
    const { selectedPeriod, selectedDate } = this.props
    return (
      <div styleName='body'>
        <CalendarColumnHeaders
          selectedPeriod={selectedPeriod}
          selectedDate={selectedDate}
        />
      </div>
    )
  }
}

const { string, object } = React.PropTypes

CalendarBody.propTypes = {
  selectedPeriod: string.isRequired,
  selectedDate: object.isRequired
}

export default CalendarBody
