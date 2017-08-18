import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Buttons.scss'

const PrimaryButton = ({ children, onClick, disabled, ...buttonProps }) => {
  const buttonClass = classNames('btn primary', {
    disabled
  })

  return (
    <button
      styleName={buttonClass}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

PrimaryButton.defaultProps = {
  disabled: false
}

PrimaryButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default PrimaryButton
