import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import * as actions from '../actions/index';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="new_user">
            <Link to="/new_user">Register</Link>
          </li>,
          <li key="login">
            <Link to="/login">Log In</Link>
          </li>
        ];
      default:
        return [
          <li key="new_poll">
            <Link to="/new_poll">Create New Poll</Link>
          </li>,
          <li key="my_polls">
            <Link to="/my_polls">My Polls</Link>
          </li>,
          <li key="all_polls">
            <Link to="/">All Polls</Link>
          </li>,

          <li key="logout">
            <a href="/api/logout">Log Out</a>
          </li>
        ];
    }
  }

  render() {
    // console.log(this.props);
    return (
      <nav className="indigo darken-3">
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Demos
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
