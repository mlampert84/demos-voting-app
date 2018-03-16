import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

// function mapStateToProps({ auth }) {
//   return { auth };
// }

export default PrivateRoute;
