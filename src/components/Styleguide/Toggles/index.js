import React from 'react'

// Components
import Toggle from 'Components/Common/Toggle'

// CSS
import './Toggles.scss'

class Toggles extends React.Component {
  state = {
    active: true
  }

  render () {
    return (
      <div className='grid' styleName='toggles'>
        <div className='col-6'>
          <div className='col-12'>
            <h4 className='light'>Toggle</h4>
          </div>

          <div className='col-12'>
            <Toggle
              active={this.state.active}
              onClick={() => this.setState({ active: !this.state.active })}
            />
          </div>
        </div>

        <div className='col-6'>
          <div className='col-12'>
            <h4 className='light'>Disabled</h4>
          </div>

          <div className='col-12'>
            <Toggle
              active
              disabled
              onClick={() => this.setState({ active: !this.state.active })}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Toggles
