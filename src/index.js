/* eslint no-undef: 0 */
import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// Redux Saga
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

// Router
import AppRouter from './router'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = createStore(rootReducer, compose(
  applyMiddleware(...middleware)
))

sagaMiddleware.run(rootSaga)


const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
