import React from 'react'
import moment from 'moment'

// CSS
import './Calendar.css'

// Components
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

class Calendar extends React.Component {
  state = {
    selectedPeriod: 'month',
    selectedDate: moment()
  }

  changePeriod = (selectedPeriod) => {
    return () => this.setState({ selectedPeriod })
  }

  changeDate = (selectedDate) => {
    this.setState({ selectedDate })
  }

  render () {
    const { selectedPeriod, selectedDate } = this.state

    return (
      <div styleName='wrapper'>
        <Header
          selectedPeriod={selectedPeriod}
          selectedDate={selectedDate}
          changePeriod={this.changePeriod}
          changeDate={this.changeDate}
        />
        <Body
          selectedPeriod={selectedPeriod}
          selectedDate={selectedDate}
        />
        <Footer />
      </div>
    )
  }
}

export default Calendar
