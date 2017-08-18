import React from 'react'

// CSS
import './Radios.scss'

// Components
import Radio from 'Components/Common/Radio'

const radios = [
  {
    name: 'sample',
    value: '1',
    label: 'Label 1'
  },
  {
    name: 'sample',
    value: '2',
    label: 'Label 2'
  }
]

const disabledRadios = [
  {
    name: 'sample',
    value: 'a',
    label: 'Label 1'
  },
  {
    name: 'sample',
    value: 'b',
    label: 'Label 2'
  }
]

class Radios extends React.Component {
  state = {
    firstSetValue: '1',
    secondSetValue: '1'
  }

  render () {
    return (
      <div className='grid' styleName='radios'>
        <div className='col'>
          <div className='grid'>
            <div className='col-6'>
              <div className='col-12'>
                <h4 className='light'>Radios</h4>
              </div>

              {
                radios.map(radio => (
                  <div className='col-2' key={radio.value}>
                    <Radio
                      name={radio.name}
                      value={radio.value}
                      checked={this.state.firstSetValue === radio.value}
                      onChange={(e) => this.setState({ firstSetValue: e.currentTarget.value })}
                    >
                      {radio.label}
                    </Radio>
                  </div>
                ))
              }
            </div>

            <div className='col-6'>
              <div className='col-12'>
                <h4 className='light'>Disabled</h4>
              </div>

              {
                disabledRadios.map(radio => (
                  <div className='col-2' key={radio.value}>
                    <Radio
                      disabled
                      name={`${radio.name}-disabled`}
                      value={radio.value}
                      checked={this.state.secondSetValue === radio.value}
                      onChange={(e) => this.setState({ secondSetValue: e.currentTarget.value })}
                    >
                      {radio.label}
                    </Radio>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Radios
