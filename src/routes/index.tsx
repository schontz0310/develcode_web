import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';
import Home from '../Pages/Home';

const Routes: React.FC = () =>{
  return(
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/Profile' component={Profile} />
    </Switch>
  )
}

export default Routes;