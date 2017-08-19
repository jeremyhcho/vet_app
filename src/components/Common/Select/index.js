import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Assets
import ChevronLeft from '../../../assets/svgs/chevron_left_18.svg'

// Components
import { Dropdown } from 'Components/Common'

class Select extends React.Component {
  state = {
    showDropdown: false
  }

  onBlur = (e) => {
    if (!this.select.contains(e.relatedTarget)) {
      this.setState({ showDropdown: false })
    }
  }

  getLabel () {
    const { items, defaultText, emptyText, multi, value, labelKey } = this.props

    if (!items.length) {
      // If there are no items in the list, return a label indicating that
      // the list is empty OR the defaultText if emptyText is not specified.
      return emptyText || defaultText
    }

    if (multi) {
      // String the labels in the value array together for multi selects.
      if (value.length) {
        return value.map(val => val[labelKey]).join(', ')
      }

      return defaultText
    }

    if (value) {
      return value[labelKey]
    }

    return defaultText
  }

  toggleDropdown = () => {
    const { showDropdown } = this.state

    if (this.props.disabled) {
      return
    }

    this.setState({ showDropdown: !showDropdown }, () => {
      if (!showDropdown) {
        ReactDOM.findDOMNode(this.dropdownRef).focus()
      }
    })
  }


  render () {
    const { items, value, disabled, multi, valueKey, labelKey, search } = this.props
    const { showDropdown } = this.state

    const wrapperClass = classNames('select-wrapper', {
      disabled
    })

    return (
      <div className={wrapperClass}>
        <div
          className='select'
          onClick={this.toggleDropdown}
          tabIndex='0'
          ref={select => this.select = select}
        >
          <span className='label'>{this.getLabel()}</span>
        </div>

        <ChevronLeft
          style={{
            position: 'absolute',
            right: '15px',
            top: '5px',
            lineHeight: '28px',
            verticalAlign: 'middle',
            transform: showDropdown ? 'rotate(90deg)' : 'rotate(-90deg)',
            transition: 'all 200ms ease',
            pointerEvents: 'none'
          }}
        />

        <Dropdown
          valueKey={valueKey}
          labelKey={labelKey}
          multi={multi}
          closeOnSelect={!multi}
          show={showDropdown}
          items={items}
          onClick={this.props.onClick}
          value={value}
          onBlur={this.onBlur}
          search={search}
          ref={dropdownRef => this.dropdownRef = dropdownRef}
        />
      </div>
    )
  }
}

Select.defaultProps = {
  value: undefined,
  disabled: false,
  multi: false,
  emptyText: undefined,
  search: false
}

Select.propTypes = {
  defaultText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  multi: PropTypes.bool,
  emptyText: PropTypes.string,
  valueKey: PropTypes.string.isRequired,
  labelKey: PropTypes.string.isRequired,
  search: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

export default Select
