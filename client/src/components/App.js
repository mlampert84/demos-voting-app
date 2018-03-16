import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Gateway from './Gateway';
import Landing from './Landing';
import Poll from './Poll';
import PollNew from './PollNew';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Gateway} />
                <Route exact path="/new_user" component={Gateway} />
                <Route exact path="/poll/:pollId/" component={Poll} />
                <ProtectedRoute
                  exact
                  path="/my_polls"
                  auth={this.props.auth}
                  component={Landing}
                />
                <ProtectedRoute
                  exact
                  path="/new_poll"
                  auth={this.props.auth}
                  component={PollNew}
                />
                <Redirect to="/" />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps, actions)(App);
