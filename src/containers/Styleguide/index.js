import React from 'react'

// CSS
import './Styleguide.scss'

// Components
import Section from 'Components/Styleguide/Section'
import Typography from 'Components/Styleguide/Typography'
import Colors from 'Components/Styleguide/Colors'
import Buttons from 'Components/Styleguide/Buttons'
import Radios from 'Components/Styleguide/Radios'

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
          <Buttons />
          <Radios />
        </Section>
      </div>
    )
  }
}

export default Styleguide
