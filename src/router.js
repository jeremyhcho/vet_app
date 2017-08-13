/* eslint react/prefer-stateless-function: 0 */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// Components
import App from './App'

const AppRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default AppRouter
