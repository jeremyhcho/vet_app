import React from 'react'
import PropTypes from 'prop-types'

// Components
import Button from './Button'

class Submit extends React.Component {
  onClick = (e) => {
    if (this.props.valid) {
      this.props.onClick(e)
    } else {
      this.props.triggerForceDirty()
    }
  }

  render () {
    const {
      className,
      triggerForceDirty,
      onClick,
      valid,
      ...buttonProps
    } = this.props

    return (
      <div className={className}>
        <Button onClick={this.onClick} {...buttonProps} />
      </div>
    )
  }
}

Submit.defaultProps = {
  className: 'col',
  valid: true,
  triggerForceDirty: () => { return null }
}

Submit.propTypes = {
  className: PropTypes.string,
  triggerForceDirty: PropTypes.func,
  valid: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default Submit
