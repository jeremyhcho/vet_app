import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Buttons.scss'

const SecondaryButton = ({ children, onClick, disabled, type, ...buttonProps }) => {
  const buttonClass = classNames('btn secondary', {
    disabled
  })

  return (
    <button
      type={type}
      styleName={buttonClass}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

SecondaryButton.defaultProps = {
  disabled: false,
  type: 'button'
}

SecondaryButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string
}

export default SecondaryButton
