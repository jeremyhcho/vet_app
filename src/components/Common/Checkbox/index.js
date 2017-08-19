import React from 'react'
import PropTypes from 'prop-types'
import randomstring from 'randomstring'
import classNames from 'classnames'

// Assets
import Checkmark from '../../../assets/svgs/checkmark_18px.svg'

const Checkbox = ({
  children,
  name,
  checked,
  onChange,
  value,
  disabled,
  ...checkboxProps
}) => {
  const identifier = randomstring.generate(name)
  const labelClass = classNames('checkbox-label', {
    disabled
  })

  const checkboxClass = classNames('checkbox', {
    disabled
  })

  const checkClass = classNames('check', {
    disabled
  })

  return (
    <label htmlFor={identifier} className={labelClass}>
      <input
        name={name}
        id={identifier}
        className={checkboxClass}
        type='checkbox'
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...checkboxProps}
      />

      <span className={checkClass}>
        <Checkmark
          width={12}
          height={12}
          style={{
            position: 'absolute',
            left: '1px',
            top: '1px'
          }}
        />
      </span>

      <span className='text'>{children}</span>
    </label>
  )
}

Checkbox.defaultProps = {
  checked: false,
  disabled: false
}

Checkbox.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default Checkbox
