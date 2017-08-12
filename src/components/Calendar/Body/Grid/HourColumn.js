import React from 'react'
import moment from 'moment'
import { extendMoment } from 'moment-range'

// CSS
import '../../Calendar.css'

class HourColumn extends React.Component {
  hoursRange () {
    const extendedMoment = extendMoment(moment)
    const startOfDay = moment().startOf('day')
    const endOfDay = moment().endOf('day')

    return Array.from(extendedMoment.range(startOfDay, endOfDay).by('hour'))
  }
  render () {
    const hours = this.hoursRange()

    return (
      <div styleName='hour-column'>
        {
          hours.map(hour => {
            const formattedHour = hour.format('h a')

            return (
              <div styleName='hour-label' key={formattedHour}>
                {formattedHour}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default HourColumn
