import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Dropdown.scss'

// Assets
import MagnifyingGlass from '../../../assets/svgs/magnifying_glass_24px.svg'

class Dropdown extends React.Component {
  state = {
    search: ''
  }

  componentWillReceiveProps (newProps) {
    if (newProps.show) {
      return
    }

    if (this.props.scrollToTopOnClose) {
      this.dropdown.scrollTop = 0
    }

    if (this.props.search) {
      this.setState({ search: '' })
    }
  }

  onBlur = (e) => {
    if (!this.props.closeOnSelect && this.dropdown.contains(e.relatedTarget)) {
      return
    }

    if (this.props.search && this.searchRef.contains(e.relatedTarget)) {
      return
    }

    if (this.props.onBlur) {
      this.props.onBlur(e)
    }
  }

  onClick = (item) => {
    return e => {
      if (this.props.closeOnSelect) {
        this.onBlur(e)
      }

      this.props.onClick(e, item)
    }
  }

  getListItem (item) {
    if (this.props.listItem) {
      return this.props.listItem
    }

    return <span styleName='item-label'>{item[this.props.labelKey]}</span>
  }

  lockBodyScroll = (bool) => {
    return () => {
      if (bool) {
        document.querySelector('body').style.overflowY = 'hidden'
      } else {
        document.querySelector('body').style.overflowY = 'auto'
      }
    }
  }

  parseSelected (value) {
    if (this.props.multi) {
      if (this.props.value.find(item => item[this.props.valueKey] === value)) {
        return true
      }

      return false
    }

    if (this.props.value) {
      return this.props.value[this.props.valueKey] === value
    }

    return false
  }

  search = (e) => {
    this.setState({ search: e.target.value })
  }

  renderSearch () {
    if (!this.props.search) {
      return null
    }

    return (
      <div styleName='search' ref={search => this.searchRef = search}>
        <input
          type='text'
          onChange={this.search}
          value={this.state.search}
        />

        <MagnifyingGlass
          width={18}
          height={18}
          style={{
            position: 'absolute',
            right: '15px',
            top: '16px',
            pointerEvents: 'none'
          }}
        />
      </div>
    )
  }

  renderItems () {
    let items = this.props.items

    if (this.props.search) {
      items = items.filter(item => item.label.toLowerCase().includes(this.state.search))
    }

    return items.map(item => this.renderItem(item))
  }

  renderItem (item) {
    const itemClassName = classNames('list-item', {
      selected: this.parseSelected(item[this.props.valueKey])
    })

    return (
      <li
        styleName={itemClassName}
        key={item.key}
        onClick={this.onClick(item)}
      >
        {this.getListItem(item)}
      </li>
    )
  }

  render () {
    const {
      items,
      onClick,
      show,
      value,
      onBlur,
      closeOnSelect,
      multi,
      scrollToTopOnClose,
      labelKey,
      valueKey,
      search,
      ...dropdownProps
    } = this.props

    const dropdownClass = classNames('dropdown', {
      show
    })

    return (
      <div
        styleName={dropdownClass}
        onBlur={this.onBlur}
        tabIndex='0'
        ref={dropdown => this.dropdown = dropdown}
        {...dropdownProps}
        onMouseEnter={this.lockBodyScroll(true)}
        onMouseLeave={this.lockBodyScroll(false)}
      >
        {this.renderSearch()}
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}

Dropdown.defaultProps = {
  onBlur: undefined,
  value: undefined,
  closeOnSelect: true,
  multi: false,
  scrollToTopOnClose: true,
  valueKey: '',
  search: false,
  listItem: undefined
}

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  closeOnSelect: PropTypes.bool,
  multi: PropTypes.bool,
  scrollToTopOnClose: PropTypes.bool,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string.isRequired,
  search: PropTypes.bool,
  listItem: PropTypes.object
}

export default Dropdown
