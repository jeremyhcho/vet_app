import React from 'react'
import PropTypes from 'prop-types'

// CSS
import '../Calendar.scss'

const ranges = [
  { label: 'Month', value: 'month' },
  { label: 'Week', value: 'week' },
  { label: 'Day', value: 'day' }
]

class RangeSelector extends React.Component {
  renderRanges () {
    const { selectedPeriod, changePeriod } = this.props

    return (
      ranges.map(range => {
        const rangeStyle = range.value === selectedPeriod ? 'selected' : ''

        return (
          <li styleName={rangeStyle} onClick={changePeriod(range.value)} key={range.value}>
            <span>{range.label}</span>
          </li>
        )
      })
    )
  }

  render () {
    return (
      <div className='col-4' styleName='third range-selector'>
        <ul>
          { this.renderRanges() }
        </ul>
      </div>
    )
  }
}

RangeSelector.propTypes = {
  selectedPeriod: PropTypes.string.isRequired,
  changePeriod: PropTypes.func.isRequired
}

export default RangeSelector
