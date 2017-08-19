import React from 'react'

// Components
import { Button, LinkButton } from 'Components/Common'

// CSS
import './Buttons.scss'

const Buttons = () => (
  <div className='grid' styleName='buttons'>
    <div className='col-6'>
      <div className='col-12'>
        <h4 className='light'>Button</h4>
      </div>

      <div className='col-12'>
        <Button onClick={() => console.log('PrimaryButton clicked.')}>
          Primary Button
        </Button>
      </div>

      <div className='col-12'>
        <Button secondary onClick={() => console.log('SecondaryButton clicked.')}>
          Secondary Button
        </Button>
      </div>

      <div className='col-12' style={{ textAlign: 'center' }}>
        <LinkButton onClick={() => console.log('LinkButton clicked.')}>
          Link Button
        </LinkButton>
      </div>
    </div>

    <div className='col-6'>
      <div className='col-12'>
        <h4 className='light'>Disabled</h4>
      </div>

      <div className='col-12'>
        <Button disabled onClick={() => console.log('PrimaryButton clicked.')}>
          Primary Button
        </Button>
      </div>

      <div className='col-12'>
        <Button disabled secondary onClick={() => console.log('SecondaryButton clicked.')}>
          Secondary Button
        </Button>
      </div>

      <div className='col-12' style={{ textAlign: 'center' }}>
        <LinkButton disabled onClick={() => console.log('LinkButton clicked.')}>
          Link Button
        </LinkButton>
      </div>
    </div>
  </div>
)

export default Buttons
