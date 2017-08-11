import React from 'react'

// CSS
import './Calendar.css'

const ranges = [
  { label: 'Month', value: 'month' },
  { label: 'Week', value: 'week' },
  { label: 'Day', value: 'day' }
]

class CalendarRangeSelector extends React.Component {
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
      <div styleName='third range-selector'>
        <ul>
          { this.renderRanges() }
        </ul>
      </div>
    )
  }
}

CalendarRangeSelector.propTypes = {
  selectedPeriod: React.PropTypes.string.isRequired,
  changePeriod: React.PropTypes.func.isRequired
}

export default CalendarRangeSelector
