import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Tab.scss'

class Tab extends React.Component {
  state = {
    selectedTabItem: this.getInitialSelected()
  }

  onClick = (tabItem) => {
    return (e) => {
      if (tabItem.key === this.state.selectedTabItem.key) {
        return null
      }

      this.setState({ selectedTabItem: tabItem })
      return this.props.onChange(e)
    }
  }

  getInitialSelected () {
    const { tabs, defaultKey } = this.props

    if (defaultKey) {
      return tabs.find(tabItem => tabItem.key === defaultKey)
    }

    return tabs[0]
  }

  render () {
    const { tabs } = this.props

    return (
      <ul className='grid' styleName='tabs'>
        {
          tabs.map(tabItem => {
            const tabItemClass = classNames('tab-item', {
              selected: tabItem.key === this.state.selectedTabItem.key
            })

            return (
              <li
                className='col'
                styleName={tabItemClass}
                onClick={this.onClick(tabItem)}
                key={tabItem.key}
              >
                {tabItem.label}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

Tab.defaultProps = {
  defaultKey: undefined
}

Tab.propTypes = {
  tabs: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultKey: PropTypes.string
}

export default Tab
