import React from 'react'

// CSS
import './Styleguide.scss'

// Components
import {
  Section,
  Typography,
  Colors,
  Buttons,
  Radios,
  Checkboxes,
  Dropdowns,
  Toggles,
  Tooltips,
  Tabs,
  Forms
} from 'Components/Styleguide'

class Styleguide extends React.Component {
  render () {
    return (
      <div styleName='styleguide'>
        <div className='grid'>
          <div className='col-8' data-push-left='off-2'>
            <h1 style={{ padding: '30px 0' }} className='bold'>Styleguide</h1>
          </div>
        </div>

        <Section header='Color Palette'>
          <Colors />
        </Section>

        <Section header='Typography'>
          <Typography />
        </Section>

        <Section header='UI Components'>
          <Forms />
          <Buttons />
          <Dropdowns />
          <Radios />
          <Checkboxes />
          <Toggles />
          <Tooltips />
          <Tabs />
        </Section>
      </div>
    )
  }
}

export default Styleguide
