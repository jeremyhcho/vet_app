import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Buttons.scss'

const SecondaryButton = ({ children, onClick, disabled, ...buttonProps }) => {
  const buttonClass = classNames('btn secondary', {
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

SecondaryButton.defaultProps = {
  disabled: false
}

SecondaryButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default SecondaryButton
