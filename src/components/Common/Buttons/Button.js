import React from 'react'
import PropTypes from 'prop-types'

// Components
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const Button = ({ primary, secondary, ...props }) => {
  if (secondary) {
    return <SecondaryButton {...props} />
  }

  return <PrimaryButton {...props} />
}

Button.defaultProps = {
  primary: true,
  secondary: false
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool
}

export default Button
