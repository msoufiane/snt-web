/* eslint-disable import/no-named-as-default */
import React from 'react';
import {Switch, Route} from 'react-router';

import Login from '../screens/login';
import Dashboard from '../screens/dashboard';
import NotFoundPage from '../screens/NotFoundPage';
import HomePage from '../components/HomePage';


class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route component={NotFoundPage}/>
      </Switch>
    );
  }
}

export default App;
