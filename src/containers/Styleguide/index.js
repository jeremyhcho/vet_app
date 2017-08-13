import React from 'react'

// CSS
import './Styleguide.scss'

// Components
import Section from 'Components/Styleguide/Section'

class Styleguide extends React.Component {
  render () {
    return (
      <div styleName='styleguide'>
        <Section header='Color Palette'>
          <div />
        </Section>
      </div>
    )
  }
}

export default Styleguide
