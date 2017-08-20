import React from 'react'
import PropTypes from 'prop-types'

// CSS
import '../Calendar.scss'

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
      <div className='col-12' styleName='header'>
        <div className='grid'>
          <RangeSelector
            selectedPeriod={selectedPeriod}
            changePeriod={changePeriod}
          />
          <RangeChanger
            selectedPeriod={selectedPeriod}
            selectedDate={selectedDate}
            changeDate={changeDate}
          />
        </div>
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
