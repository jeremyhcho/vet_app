import React from 'react'
import PropTypes from 'prop-types'

// CSS
import '../Calendar.css'

// Components
import RangeSelector from './RangeSelector'
import RangeChanger from './RangeChanger'

class Header extends React.Component {
  render () {
    const {
      selectedPeriod,
      changePeriod,
      selectedDate,
      changeDate
    } = this.props

    return (
      <div styleName='header'>
        <RangeSelector
          selectedPeriod={selectedPeriod}
          changePeriod={changePeriod}
        />
        <RangeChanger
          selectedPeriod={selectedPeriod}
          selectedDate={selectedDate}
          changeDate={changeDate}
        />
        <div styleName='third' />
      </div>
    )
  }
}

const { string, func, object } = PropTypes

Header.propTypes = {
  selectedPeriod: string.isRequired,
  selectedDate: object.isRequired,
  changePeriod: func.isRequired,
  changeDate: func.isRequired
}

export default Header
