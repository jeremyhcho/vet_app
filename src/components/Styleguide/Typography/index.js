import React from 'react'

// CSS
import './Typography.scss'

const Typography = () => (
  <div className='grid-12' styleName='typography'>
    <div className='col-12'>
      <div className='grid'>
        <div className='col bold'>Proxima Nova</div>
        <div className='col bold'>Semibold</div>
        <div className='col'>Regular</div>
        <div className='col light'>Light</div>
      </div>
    </div>

    <div className='col-12' styleName='row'>
      <div className='grid'>
        <div className='col'>
          <div className='grid'>
            <div className='col-3 bold'>H1</div>
            <div className='col' style={{ textAlign: 'center' }}>24px</div>
          </div>
        </div>
        <h1 className='col bold'>The quick brown fox jumps over the lazy dog.</h1>
        <h1 className='col'>The quick brown fox jumps over the lazy dog.</h1>
        <h1 className='col light'>The quick brown fox jumps over the lazy dog.</h1>
      </div>
    </div>

    <div className='col-12' styleName='row'>
      <div className='grid'>
        <div className='col'>
          <div className='grid'>
            <div className='col-3 bold'>H2</div>
            <div className='col' style={{ textAlign: 'center' }}>22px</div>
          </div>
        </div>
        <h2 className='col bold'>The quick brown fox jumps over the lazy dog.</h2>
        <h2 className='col'>The quick brown fox jumps over the lazy dog.</h2>
        <h2 className='col light'>The quick brown fox jumps over the lazy dog.</h2>
      </div>
    </div>

    <div className='col-12' styleName='row'>
      <div className='grid'>
        <div className='col'>
          <div className='grid'>
            <div className='col-3 bold'>H3</div>
            <div className='col' style={{ textAlign: 'center' }}>20px</div>
          </div>
        </div>
        <h3 className='col bold'>The quick brown fox jumps over the lazy dog.</h3>
        <h3 className='col'>The quick brown fox jumps over the lazy dog.</h3>
        <h3 className='col light'>The quick brown fox jumps over the lazy dog.</h3>
      </div>
    </div>

    <div className='col-12' styleName='row'>
      <div className='grid'>
        <div className='col'>
          <div className='grid'>
            <div className='col-3 bold'>H4</div>
            <div className='col' style={{ textAlign: 'center' }}>18px</div>
          </div>
        </div>
        <h4 className='col bold'>The quick brown fox jumps over the lazy dog.</h4>
        <h4 className='col'>The quick brown fox jumps over the lazy dog.</h4>
        <h4 className='col light'>The quick brown fox jumps over the lazy dog.</h4>
      </div>
    </div>

    <div className='col-12' styleName='row'>
      <div className='grid'>
        <div className='col'>
          <div className='grid'>
            <div className='col-3 bold'>Body</div>
            <div className='col' style={{ textAlign: 'center' }}>14px</div>
          </div>
        </div>
        <p className='col bold'>The quick brown fox jumps over the lazy dog.</p>
        <p className='col'>The quick brown fox jumps over the lazy dog.</p>
        <p className='col light'>The quick brown fox jumps over the lazy dog.</p>
      </div>
    </div>
  </div>
)


export default Typography
