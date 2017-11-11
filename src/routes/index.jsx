import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from '../screens/login';
import HomePage from '../screens/HomePage';
import NotFoundPage from '../screens/NotFoundPage';

import AuthenticatedRoute from "./AuthenticatedRoute";

class Routes extends React.Component {
  render() {
    return(
      <Switch>
        <Route path="/login" component={Login} />
        <AuthenticatedRoute exact path="/" component={HomePage} />
        <AuthenticatedRoute component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
