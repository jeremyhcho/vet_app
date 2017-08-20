import React from 'react'
import PropTypes from 'prop-types'

// Components
import ColumnHeaders from './ColumnHeaders'
import Grid from './Grid'

// CSS
import '../Calendar.scss'

class Body extends React.Component {
  render () {
    const { selectedPeriod, selectedDate } = this.props

    return (
      <div className='col-12' styleName='body'>
        <ColumnHeaders
          selectedPeriod={selectedPeriod}
          selectedDate={selectedDate}
        />
        <Grid
          selectedPeriod={selectedPeriod}
          selectedDate={selectedDate}
        />
      </div>
    )
  }
}

const { string, object } = PropTypes

Body.propTypes = {
  selectedPeriod: string.isRequired,
  selectedDate: object.isRequired
}

export default Body
