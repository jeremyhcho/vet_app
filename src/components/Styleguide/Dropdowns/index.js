import React from 'react'

// Components
import { ActionDropdown, Select } from 'Components/Common'

// CSS
import './Dropdowns.scss'

const sampleItems = [
  { key: '1', value: '1', label: 'Label 1' },
  { key: '2', value: '2', label: 'Label 2' },
  { key: '3', value: '3', label: 'Label 3' },
  { key: '4', value: '4', label: 'Label 4' },
  { key: '5', value: '5', label: 'Label 5' },
  { key: '6', value: '6', label: 'Label 6' },
  { key: '7', value: '7', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' }
]

class Dropdowns extends React.Component {
  state = {
    single: null,
    multi: []
  }

  addValueToMulti (item) {
    const index = this.state.multi.findIndex(val => item.value === val.value)
    const newValues = [...this.state.multi]

    if (index > -1) {
      newValues.splice(index, 1)
      this.setState({ multi: newValues })
    } else {
      this.setState({ multi: newValues.concat([item]) })
    }
  }

  render () {
    return (
      <div className='grid' styleName='dropdowns'>
        <div className='col-6'>
          <div className='col-12'>
            <h4 className='light'>Select</h4>
          </div>

          <div className='col-12'>
            <Select
              defaultText='Select an Item'
              emptyText='No items found'
              items={sampleItems}
              valueKey='value'
              labelKey='label'
              value={this.state.single}
              onClick={(e, item) => this.setState({ single: item })}
            />
          </div>
        </div>

        <div className='col-6'>
          <div className='col-12'>
            <h4 className='light'>Disabled</h4>
          </div>

          <div className='col-12'>
            <Select
              disabled
              defaultText='Select an Item'
              emptyText='No items found'
              items={sampleItems}
              valueKey='value'
              labelKey='label'
              value={this.state.single}
              onClick={(e, item) => this.setState({ single: item })}
            />
          </div>
        </div>

        <div className='col-6'>
          <div className='col-12'>
            <h4 className='light'>Multi Select</h4>
          </div>

          <div className='col-12'>
            <Select
              multi
              defaultText='Select an Item'
              valueKey='value'
              labelKey='label'
              items={sampleItems}
              value={this.state.multi}
              onClick={(e, item) => this.addValueToMulti(item)}
            />
          </div>
        </div>

        <div className='col-6'>
          <div className='col-12'>
            <h4 className='light'>Disabled</h4>
          </div>

          <div className='col-12'>
            <Select
              multi
              disabled
              defaultText='Select an Item'
              valueKey='value'
              labelKey='label'
              items={sampleItems}
              value={this.state.multi}
              onClick={(e, item) => this.addValueToMulti(item)}
            />
          </div>
        </div>

        <div className='col-6'>
          <div className='col-12'>
            <h4 className='light'>Search Select</h4>
          </div>

          <div className='col-12'>
            <Select
              search
              defaultText='Select an Item'
              valueKey='value'
              labelKey='label'
              items={sampleItems}
              value={this.state.search}
              onClick={(e, item) => this.setState({ search: item })}
            />
          </div>
        </div>

        <div className='col-6'>
          <div className='col-12'>
            <h4 className='light'>Disabled</h4>
          </div>

          <div className='col-12'>
            <Select
              disabled
              search
              defaultText='Select an Item'
              valueKey='value'
              labelKey='label'
              items={sampleItems}
              value={this.state.search}
              onClick={(e, item) => this.setState({ search: item })}
            />
          </div>
        </div>

        <div className='col-6'>
          <div className='col-12'>
            <h4 className='light'>Action Dropdown</h4>
          </div>

          <div className='col-12'>
            <ActionDropdown
              items={sampleItems}
              onClick={() => console.log('ActionDropdown clicked.')}
              onDropdownClick={() => console.log('Dropdown inside ActionDropdown clicked.')}
            >
              Button
            </ActionDropdown>
          </div>

          <div className='col-12'>
            <ActionDropdown
              secondary
              items={sampleItems}
              onClick={() => console.log('ActionDropdown clicked.')}
              onDropdownClick={() => console.log('Dropdown inside ActionDropdown clicked.')}
            >
              Button
            </ActionDropdown>
          </div>
        </div>

        <div className='col-6'>
          <div className='col-12'>
            <h4 className='light'>Disabled</h4>
          </div>

          <div className='col-12'>
            <ActionDropdown
              disabled
              items={sampleItems}
              onClick={() => console.log('ActionDropdown clicked.')}
              onDropdownClick={() => console.log('Dropdown inside ActionDropdown clicked.')}
            >
              Button
            </ActionDropdown>
          </div>

          <div className='col-12'>
            <ActionDropdown
              disabled
              secondary
              items={sampleItems}
              onClick={() => console.log('ActionDropdown clicked.')}
              onDropdownClick={() => console.log('Dropdown inside ActionDropdown clicked.')}
            >
              Button
            </ActionDropdown>
          </div>
        </div>
      </div>
    )
  }
}

export default Dropdowns
