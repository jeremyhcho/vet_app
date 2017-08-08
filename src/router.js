/* eslint react/prefer-stateless-function: 0 */
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component }

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }

    render() {
      const { Component } = this.state

      if (Component) {
        return <Component {...this.props} />
      }

      return null
    }
  }
}

const App = asyncComponent(() =>
  import('./components/App').then(module => module.default)
)

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={App} />
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter
