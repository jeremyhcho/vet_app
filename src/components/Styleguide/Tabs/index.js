import React from 'react'

// Components
import { Tab } from 'Components/Common'

const tabItems = [
  { label: 'Market', key: 'market' },
  { label: 'Manager', key: 'manager' },
  { label: 'Route', key: 'route' },
  { label: 'On-Demand', key: 'on-demand' },
  { label: 'Hamper', key: 'hamper' },
  { label: 'Rates', key: 'rates' }
]

class Tabs extends React.Component {
  render () {
    return (
      <div className='grid'>
        <div className='col-12'>
          <div className='col-12'>
            <h4 className='light'>Tabs</h4>
          </div>

          <div className='col-12'>
            <Tab
              tabs={tabItems}
              onChange={(menuItem) => this.setState({ selected: menuItem.key })}
              defaultKey='manager'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Tabs
