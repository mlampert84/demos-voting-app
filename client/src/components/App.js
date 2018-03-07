import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Gateway from './Gateway';
import './App.css';
const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Poll = () => <h2>Poll</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/login" component={Gateway} />
            <Route exact path="/new_user" component={Gateway} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/my_polls" component={Dashboard} />
            <Route path="/my_polls/new" component={Poll} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
