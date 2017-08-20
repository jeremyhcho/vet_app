import React from 'react'
import PropTypes from 'prop-types'

// Components
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

class Button extends React.Component {
  onClick = (e) => {
    if (this.props.disabled) {
      return null
    }

    return this.props.onClick(e)
  }

  render () {
    const { primary, secondary, onClick, ...buttonProps } = this.props

    if (secondary) {
      return <SecondaryButton onClick={this.onClick} {...buttonProps} />
    }

    return <PrimaryButton onClick={this.onClick} {...buttonProps} />
  }
}

Button.defaultProps = {
  primary: true,
  secondary: false,
  disabled: false
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default Button
