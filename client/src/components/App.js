import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Gateway from './Gateway';
import Landing from './Landing';
import Poll from './Poll';
import './App.css';
const Dashboard = () => <h2>Dashboard</h2>;

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
              <Route exact path="/login" component={Gateway} />
              <Route exact path="/new_user" component={Gateway} />
              <Route exact path="/" component={Landing} />
              <Route exact path="/my_polls" component={Dashboard} />
              <Route path="/poll/:pollId" component={Poll} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
