import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Buttons.scss'

const LinkButton = ({ children, onClick, disabled, ...buttonProps }) => {
  const buttonClass = classNames('btn link', {
    disabled
  })

  return (
    <button styleName={buttonClass} onClick={onClick} {...buttonProps}>
      { children }
    </button>
  )
}

const { object, func, string, bool, array } = PropTypes

LinkButton.defaultProps = {
  disabled: false
}

LinkButton.propTypes = {
  children: PropTypes.oneOfType([
    string,
    object,
    array
  ]).isRequired,
  onClick: func.isRequired,
  disabled: bool
}

export default LinkButton
