/* eslint no-undef: 0 */
import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// Hot Loader
import { AppContainer } from 'react-hot-loader'

// Redux Saga
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

// Global CSS
import './assets/stylesheets/main.scss'

// Router
import AppRouter from './router'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = createStore(rootReducer, compose(
  applyMiddleware(...middleware)
))

sagaMiddleware.run(rootSaga)


const rootEl = document.getElementById('root')

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./router', () => {
    const NextApp = require('./router').default

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>
    )
  })
}
