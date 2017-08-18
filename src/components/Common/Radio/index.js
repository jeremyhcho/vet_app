import React from 'react'
import PropTypes from 'prop-types'
import randomstring from 'randomstring'
import classNames from 'classnames'

const Radio = ({
  children,
  name,
  checked,
  onChange,
  value,
  disabled,
  ...radioProps
}) => {
  const identifier = randomstring.generate(name)
  const labelClass = classNames('radio-label', {
    disabled
  })

  const radioClass = classNames('radio', {
    disabled
  })

  const circleClass = classNames('circle', {
    disabled
  })

  return (
    <label htmlFor={identifier} className={labelClass}>
      <input
        name={name}
        id={identifier}
        className={radioClass}
        type='radio'
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...radioProps}
      />

      <span className={circleClass} />
      <span className='text'>{children}</span>
    </label>
  )
}

Radio.defaultProps = {
  checked: false,
  disabled: false
}

Radio.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default Radio
