import React from 'react'

// Components
import { Checkbox } from 'Components/Common'

// CSS
import './Checkboxes.scss'

const checkboxes = [
  {
    label: 'Label 1',
    value: '1',
    name: 'sample'
  },
  {
    label: 'Label 2',
    value: '2',
    name: 'sample'
  }
]

const disabledCheckboxes = [
  {
    label: 'Label 1',
    value: 'a',
    name: 'sample-disabled'
  },
  {
    label: 'Label 2',
    value: 'b',
    name: 'sample-disabled'
  }
]

class Checkboxes extends React.Component {
  state = {
    checkedBoxes: []
  }

  changeState = (e) => {
    const newCheckedBoxes = [...this.state.checkedBoxes]
    const index = newCheckedBoxes.indexOf(e.target.value)

    if (index > -1) {
      newCheckedBoxes.splice(index, 1)
      this.setState({ checkedBoxes: newCheckedBoxes })
    } else {
      this.setState({ checkedBoxes: newCheckedBoxes.concat([e.target.value]) })
    }
  }

  render () {
    return (
      <div className='grid' styleName='checkboxes'>
        <div className='col-6'>
          <div className='col-12'>
            <h4 className='light'>Checkbox</h4>
          </div>

          {
            checkboxes.map(checkbox => (
              <div className='col-2' key={checkbox.value}>
                <Checkbox
                  value={checkbox.value}
                  name={checkbox.name}
                  onChange={this.changeState}
                  checked={this.state.checkedBoxes.includes(checkbox.value)}
                >
                  {checkbox.label}
                </Checkbox>
              </div>
            ))
          }
        </div>

        <div className='col-6'>
          <div className='col-12'>
            <h4 className='light'>Disabled</h4>
          </div>

          {
            disabledCheckboxes.map(checkbox => (
              <div className='col-2' key={checkbox.value}>
                <Checkbox
                  disabled
                  value={checkbox.value}
                  name={checkbox.name}
                  onChange={this.changeState}
                  checked={this.state.checkedBoxes.includes(checkbox.value)}
                >
                  {checkbox.label}
                </Checkbox>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Checkboxes
