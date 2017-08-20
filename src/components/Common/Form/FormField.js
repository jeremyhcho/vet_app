import React from 'react'
import PropTypes from 'prop-types'
import compact from 'lodash/compact'
import uniqueId from 'lodash/uniqueId'
import classNames from 'classnames'

// CSS
import './Form.scss'

class FormField extends React.Component {
  state = {
    id: uniqueId('form-input-'),
    dirty: this.props.dirty,
    error: this.props.error
  }

  componentDidMount () {
    if (this.props.validators.length && this.props.onChangeInGroup) {
      this.props.onChangeInGroup(this.state.id, this.runValidations(this.props.value))
    }
  }

  componentWillReceiveProps (newProps) {
    if (this.props.value !== newProps.value && this.state.error) {
      this.setState({ dirty: false })
    }
  }

  componentWillUnmount () {
    if (this.props.onValidatorLeave) {
      this.props.onValidatorLeave(this.state.id)
    }
  }

  onChange = (e) => {
    if (this.props.onChangeInGroup) {
      this.props.onChangeInGroup(this.state.id, this.runValidations(e.target.value))
    }

    this.props.onChange(e)
  }

  onBlur = (e) => {
    this.setState({
      dirty: true,
      error: this.runValidations(e.target.value)
    })

    return this.props.onBlur(e)
  }

  runValidations (value) {
    return compact(
      this.props.validators.map(validator => validator(this.props.label, value))
    )[0]
  }

  renderLabel () {
    const { label, disabled } = this.props

    if (!label) {
      return null
    }

    const labelClass = classNames('input-label', {
      disabled
    })

    return <p styleName={labelClass}>{label}</p>
  }

  renderError () {
    if (!this.props.validators.length || !this.state.error || !this.state.dirty) {
      return null
    }

    return this.state.error
  }

  render () {
    const {
      type,
      value,
      onChange,
      validators,
      className,
      dirty,
      error,
      onChangeInGroup,
      onValidatorLeave,
      onBlur,
      disabled,
      ...inputProps
    } = this.props

    const inputClass = classNames({
      error: this.state.error,
      disabled
    })

    return (
      <div className={className} styleName='form-field'>
        {this.renderLabel()}
        <input
          disabled={disabled}
          styleName={inputClass}
          type={type}
          value={value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          {...inputProps}
        />
        <p styleName='error-label'>
          {this.renderError()}
        </p>
      </div>
    )
  }
}

FormField.defaultProps = {
  validators: [],
  dirty: false,
  error: '',
  label: '',
  className: '',
  onChangeInGroup: undefined,
  onValidatorLeave: undefined,
  disabled: false,
  onBlur: () => { return null }
}

FormField.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validators: PropTypes.array,
  dirty: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  onChangeInGroup: PropTypes.func,
  onValidatorLeave: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool
}

export default FormField
