import React from 'react'

import './Colors.scss'

const colors = [
  {
    styleName: 'blue-dark',
    label: 'Dark Blue',
    hex: '#3590DC',
    rgb: 'rgb(53, 144, 220)'
  },
  {
    styleName: 'blue',
    label: 'Blue',
    hex: '#3EA5FB',
    rgb: 'rgb(62, 165, 251)'
  },
  {
    styleName: 'success',
    label: 'Green',
    hex: '#44BE2C',
    rgb: 'rgb(68, 190, 44)'
  },
  {
    styleName: 'error',
    label: 'Red',
    hex: '#F72C2C',
    rgb: 'rgb(247, 44, 44)'
  },
  {
    styleName: 'gray',
    label: 'Gray',
    hex: '#CCCCCC',
    rgb: 'rgb(204, 204, 204)'
  },
  {
    styleName: 'gray-light',
    label: 'Light Gray',
    hex: '#E8E8E8',
    rgb: 'rgb(232, 232, 232)'
  },
  {
    styleName: 'black',
    label: 'Black',
    hex: '#3C3C3C',
    rgb: 'rgb(60, 60, 60)'
  }
]

const Colors = () => (
  <div className='grid' styleName='colors'>
    {
      colors.map(color => (
        <div className='col-3' styleName='color' key={color.styleName}>
          <div styleName={`swab ${color.styleName}`} />

          <div styleName='description'>
            <p className='bold'>{color.label}</p>
            <p className='light'>{color.hex}</p>
            <p className='light'>{color.rgb}</p>
          </div>
        </div>
      ))
    }
  </div>
)

export default Colors
