import React from 'react'

// Components
import { FormGroup, FormField, Submit } from 'Components/Common'

// Validators
import { minChar, presence, email } from 'Helpers/Validators'

class Inputs extends React.Component {
  state = {
    email: '',
    password: ''
  }

  onChange = (field) => {
    return (e) => this.setState({ [field]: e.target.value })
  }

  render () {
    return (
      <div className='grid'>
        <div className='col-6'>
          <div className='col-12'>
            <h4 className='light'>Form Fields</h4>
          </div>

          <FormGroup className='col-6'>
            <FormField
              type='text'
              value={this.state.email}
              onChange={this.onChange('email')}
              validators={[presence(), email()]}
              className='col-6'
              label='E-mail'
            />

            <FormField
              type='text'
              value={this.state.password}
              onChange={this.onChange('password')}
              validators={[presence(), minChar(6)]}
              className='col-6'
              label='Password'
            />

            <Submit className='col-12' onClick={() => console.log('Submit clicked!')}>
              Submit
            </Submit>
          </FormGroup>
        </div>

        <div className='col-6'>
          <div className='col-12'>
            <h4 className='light'>Disabled</h4>
          </div>

          <FormGroup className='col-6' disableSubmitUntilValid>
            <FormField
              disabled
              type='text'
              value=''
              onChange={() => console.log('Nope')}
              validators={[presence(), email()]}
              className='col-6'
              label='E-mail'
            />

            <FormField
              disabled
              type='text'
              value=''
              onChange={() => console.log('Nope')}
              validators={[presence(), minChar(6)]}
              className='col-6'
              label='Password'
            />

            <Submit className='col-12' onClick={() => console.log('Submit clicked!')}>
              Submit
            </Submit>
          </FormGroup>
        </div>
      </div>
    )
  }
}

export default Inputs
