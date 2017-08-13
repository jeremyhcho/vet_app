import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'

// CSS
import '../../Calendar.scss'

const HOUR_IN_PIXELS = 50
const HALF_HOUR_IN_PIXELS = 25
const QUARTER_HOUR_IN_PIXELS = 12.5

class Appointment extends React.Component {
  formattedTime () {
    let time = ''
    const splitTime = moment(this.props.appointment.from).format('LT').split(' ')

    if (splitTime[0].split(':')[1] === '00') {
      time += splitTime[0].split(':')[0]
    } else {
      time += splitTime[0]
    }

    if (splitTime[1] === 'PM') {
      time += 'p'
    }

    return time
  }

  locationStyles () {
    if (!this.props.isHourBased) {
      return {}
    }

    const top = this.calculateTop()
    const height = this.calculateHeight()

    let styles = { height, top }

    if (this.isQuarterHourAppointment(top)) {
      styles = { ...styles, ...this.quarterHourStyles() }
    }

    return styles
  }

  calculateTop () {
    return this.hoursFromMidnight() * HOUR_IN_PIXELS
  }

  calculateHeight () {
    const { appointment } = this.props

    return (
      moment(appointment.to)
        .diff(moment(appointment.from), 'hour', true) * HOUR_IN_PIXELS
    )
  }

  isQuarterHourAppointment (top) {
    return top % HALF_HOUR_IN_PIXELS === QUARTER_HOUR_IN_PIXELS
  }

  quarterHourStyles () {
    return ({
      right: 0,
      border: '1px solid white',
      zIndex: 2,
      width: '50%'
    })
  }

  hoursFromMidnight () {
    const { appointment } = this.props

    return moment(appointment.from).diff(moment(appointment.from).startOf('day'), 'hour', true)
  }

  renderAppointment () {
    return `${this.formattedTime()} ${this.props.appointment.name}`
  }

  render () {
    const appointmentClass = classNames('appointment', {
      'hour-based': this.props.isHourBased
    })

    return (
      <div styleName={appointmentClass} style={this.locationStyles()}>
        {this.renderAppointment()}
      </div>
    )
  }
}

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  isHourBased: PropTypes.bool
}

Appointment.defaultProps = {
  isHourBased: false
}

export default Appointment
