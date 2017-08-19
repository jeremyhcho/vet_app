/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

// CSS
import './ActionDropdown.scss'

// Assets
import ChevronLeft from '../../../assets/svgs/chevron_left_18.svg'

// Components
import { Dropdown } from 'Components/Common'

class ActionDropdown extends React.Component {
  state = {
    showDropdown: false
  }

  onBlur = (e) => {
    if (!this.angle.contains(e.relatedTarget)) {
      this.setState({ showDropdown: false })
    }
  }

  onDropdownClick = (e) => {
    this.props.onDropdownClick(e)
    this.setState({ showDropdown: false })
  }

  toggleDropdown = () => {
    if (this.props.disabled) {
      return
    }

    this.setState({ showDropdown: !this.state.showDropdown }, () => {
      if (this.state.showDropdown) {
        ReactDOM.findDOMNode(this.dropdownRef).focus()
      }
    })
  }

  render () {
    const { children, onClick, disabled, secondary } = this.props
    const dropdownClass = classNames('action-dropdown', {
      primary: !secondary,
      secondary,
      disabled
    })

    const primaryClass = classNames('left', {
      primary: !secondary,
      secondary,
      disabled
    })

    const angleClass = classNames('angle', {
      primary: !secondary,
      secondary,
      disabled
    })

    return (
      <div styleName={dropdownClass}>
        <div styleName={primaryClass} onClick={this.props.onClick}>
          {this.props.children}
        </div>

        <div
          styleName={angleClass}
          onClick={this.toggleDropdown}
          ref={angle => this.angle = angle}
          tabIndex='0'
        >
          <ChevronLeft
            style={{
              display: 'inline-block',
              lineHeight: '28px',
              verticalAlign: 'middle',
              transform: this.state.showDropdown ? 'rotate(90deg)' : 'rotate(-90deg)',
              transition: 'all 200ms ease',
              pointerEvents: 'none'
            }}
          />
        </div>

        <Dropdown
          labelKey='label'
          show={this.state.showDropdown}
          items={this.props.items}
          onClick={this.onDropdownClick}
          onBlur={this.onBlur}
          ref={dropdownRef => this.dropdownRef = dropdownRef}
        />
      </div>
    )
  }
}

ActionDropdown.defaultProps = {
  disabled: false,
  primary: true,
  secondary: false
}

ActionDropdown.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onDropdownClick: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  secondary: PropTypes.bool
}

export default ActionDropdown
