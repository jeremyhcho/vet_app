import React from 'react'
import PropTypes from 'prop-types'

class FormGroup extends React.Component {
  state = {
    valid: true,
    invalidStates: new Map()
  }

  onValidatorLeave = (id) => {
    this.state.invalidStates.delete(id)
    this.checkValidation()
  }

  onChangeInGroup = (id, error) => {
    this.state.invalidStates.set(id, error)
    this.checkValidations()
  }

  checkValidations () {
    let validState = true

    for (const notValid of this.state.invalidStates.values()) {
      if (notValid) {
        validState = false
        break
      }
    }

    if (this.state.valid !== validState) {
      this.setState({ valid: validState })
    }
  }

  render () {
    const baseProps = {
      onChangeInGroup: this.onChangeInGroup,
      onValidatorLeave: this.onValidatorLeave
    }

    const { children, ...formGroupProps } = this.props

    const newChildren = React.Children.map(children, child => {
      if (child && child.type.name === 'FormField') {
        return React.cloneElement(child, baseProps)
      }

      if (child && child.props && child.type.name === 'Submit') {
        return React.cloneElement(child, { disabled: !this.state.valid })
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
  className: 'grid'
}

FormGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}

export default FormGroup
