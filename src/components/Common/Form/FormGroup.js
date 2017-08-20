import React from 'react'
import PropTypes from 'prop-types'

class FormGroup extends React.Component {
  state = {
    valid: true,
    invalidStates: new Map(),
    forceDirty: false
  }

  onValidatorLeave = (id) => {
    this.state.invalidStates.delete(id)
    this.checkValidation()
  }

  onChangeInGroup = (id, error) => {
    // This callback gets called when a FormField is mounted or the input within
    // it changes.
    this.state.invalidStates.set(id, error)
    this.checkValidations()
  }

  checkValidations (force = false) {
    let validState = true

    for (const notValid of this.state.invalidStates.values()) {
      if (notValid) {
        validState = false
        break
      }
    }

    const newState = {}

    if (this.state.valid !== validState) {
      newState.valid = validState
    }

    if (force) {
      // Used when the Submit button is NOT disabled and we want to surface all
      // and any errors.
      newState.forceDirty = true
    }

    this.setState(newState)
  }

  triggerForceDirty = () => {
    // Surfaces all and any errors at once.
    this.checkValidations(true)
  }

  render () {
    const baseProps = {
      onChangeInGroup: this.onChangeInGroup,
      onValidatorLeave: this.onValidatorLeave,
      forceDirty: this.state.forceDirty
    }

    const { children, disableSubmitUntilValid, ...formGroupProps } = this.props

    const newChildren = React.Children.map(children, child => {
      if (child && child.type.name === 'FormField') {
        return React.cloneElement(child, baseProps)
      }

      if (child && child.props && child.type.name === 'Submit') {
        if (disableSubmitUntilValid) {
          return React.cloneElement(child, { disabled: !this.state.valid })
        }

        return React.cloneElement(child, {
          valid: this.state.valid,
          triggerForceDirty: this.triggerForceDirty
        })
      }

      return child
    })

    return (
      <div {...formGroupProps}>
        {newChildren}
      </div>
    )
  }
}

FormGroup.defaultProps = {
  className: 'grid',
  disableSubmitUntilValid: false
}

FormGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  disableSubmitUntilValid: PropTypes.bool
}

export default FormGroup
