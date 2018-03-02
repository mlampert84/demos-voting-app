import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import { logIn } from '../actions/index';

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Demos
          </a>
          <ul className="right">
            <li key="login">
              <Login />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { logIn })(Header);
