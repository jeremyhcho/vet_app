import React from 'react'

// Components
import { Tooltip } from 'Components/Common'

// CSS
import './Tooltips.scss'

const Tooltips = () => (
  <div className='grid' styleName='tooltips'>
    <div className='col-12'>
      <div className='col-12'>
        <h4 className='light'>Tooltip</h4>
      </div>

      <div className='grid'>
        <div className='col-3'>
          <div className='col-12'>
            <span data-tip-for='top' className='light'>Top</span>

            <Tooltip id='top' pos='top'>
              Top
            </Tooltip>
          </div>
        </div>

        <div className='col-3'>
          <div className='col-12'>
            <span data-tip-for='right' className='light'>Right</span>

            <Tooltip id='right' pos='right'>
              Right
            </Tooltip>
          </div>
        </div>

        <div className='col-3'>
          <div className='col-12'>
            <span data-tip-for='bottom' className='light'>Bottom</span>

            <Tooltip id='bottom' pos='bottom'>
              Bottom
            </Tooltip>
          </div>
        </div>

        <div className='col-3'>
          <div className='col-12'>
            <span data-tip-for='left' className='light'>Left</span>

            <Tooltip id='left' pos='left'>
              Left
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Tooltips
