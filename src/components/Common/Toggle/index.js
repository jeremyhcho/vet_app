import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Toggle.scss'

// Assets
import Checkmark from '../../../assets/svgs/checkmark_18px.svg'
import Close from '../../../assets/svgs/close_24px.svg'

class Toggle extends React.Component {
  onClick = (e) => {
    if (this.props.disabled) {
      return
    }

    this.props.onClick(e)
  }

  render () {
    const { active, disabled } = this.props

    const toggleClass = classNames('toggle', {
      active,
      disabled
    })

    return (
      <div styleName={toggleClass} onClick={this.onClick}>
        <div styleName='indicator' />
        <Checkmark
          height={18}
          width={18}
          style={{
            fill: 'white',
            position: 'absolute',
            left: '11px',
            top: '3px'
          }}
        />
        <Close
          height={18}
          width={18}
          style={{
            fill: 'white',
            position: 'absolute',
            right: '11px',
            top: '3px'
          }}
        />
      </div>
    )
  }
}

Toggle.defaultProps = {
  disabled: false
}

Toggle.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default Toggle
