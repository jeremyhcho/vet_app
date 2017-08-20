import React from 'react'
import PropTypes from 'prop-types'

// Components
import Button from './Button'

class Submit extends React.Component {
  render () {
    const { className } = this.props

    return (
      <div className={className}>
        <Button {...this.props} />
      </div>
    )
  }
}

Submit.defaultProps = {
  className: 'col'
}

Submit.propTypes = {
  className: PropTypes.string
}

export default Submit
