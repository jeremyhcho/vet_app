import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Buttons.scss'

class LinkButton extends React.Component {
  onClick = (e) => {
    if (this.props.disabled) {
      return null
    }

    return this.props.onClick(e)
  }

  render () {
    const { children, onClick, disabled, type, ...buttonProps } = this.props

    const buttonClass = classNames('btn link', {
      disabled
    })

    return (
      <button type={type} styleName={buttonClass} onClick={this.onClick} {...buttonProps}>
        { children }
      </button>
    )
  }
}

const { object, func, string, bool, array } = PropTypes

LinkButton.defaultProps = {
  disabled: false,
  type: 'button'
}

LinkButton.propTypes = {
  children: PropTypes.oneOfType([
    string,
    object,
    array
  ]).isRequired,
  onClick: func.isRequired,
  disabled: bool,
  type: PropTypes.string
}

export default LinkButton
