import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

export const AuthenticatedRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    props.isLogged ? (<Component {...props}/>) :
      (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>)
  )}/>
);


AuthenticatedRoute.propTypes = {
  component: PropTypes.element,
  isLogged: PropTypes.bool,
  location: PropTypes.string
};

