import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

// Components
import Loader from 'Components/Common/Loader'

const Calendar = Loadable({
  loader: () => import('./components/Calendar'),
  loading: Loader
})

const Styleguide = Loadable({
  loader: () => import('./containers/Styleguide'),
  loading: Loader
})

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Styleguide} />
      <Route exact path='/calendar' component={Calendar} />
    </Switch>
  </main>
)

export default Routes
