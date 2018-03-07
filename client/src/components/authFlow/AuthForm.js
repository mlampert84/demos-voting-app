import React, { Component } from 'react';

class AuthForm extends Component {
  returnTitle = () => {
    return this.props.pathname === '/login' ? 'Log In' : 'Register';
  };

  returnInstructions = () => {
    return this.props.pathname === '/login'
      ? 'Please enter your Username and Password.'
      : 'Pleaes enter a new Username and Password.';
  };

  returnPasswordConfirm = () => {
    return this.props.pathname === '/login' ? (
      <div />
    ) : (
      <div className="row">
        <div className="input-field col s12">
          <input
            id="passwordConfirm"
            type="password"
            value={this.props.passwordConfirm}
            onChange={this.props.handlePasswordConfirmChange}
          />
          <label htmlFor="password">Confirm Password</label>
          {this.returnPasswordConfirmFailure()}
        </div>
      </div>
    );
  };

  returnPasswordConfirmFailure = () => {
    if (!this.props.passwordEntered)
      return <span style={{ color: 'red' }}>{'Please enter a password.'}</span>;
    if (!this.props.passwordsMatch)
      return (
        <span style={{ color: 'red' }}>
          {"The passwords don't match. Please retype your password."}
        </span>
      );
    return;
  };

  returnUsernameEmpty = () => {
    return this.props.usernameEntered ? (
      <span />
    ) : (
      <span style={{ color: 'red' }}>{'Please enter a username.'}</span>
    );
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s10 offset-s1">
            <h4>{this.returnTitle()}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col s10 offset-s1">
            <p>{this.returnInstructions()}</p>
          </div>
        </div>
        <div className="row">
          <form className="col s10 offset-s1">
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="username"
                  type="text"
                  value={this.props.username}
                  onChange={this.props.handleUsernameChange}
                />
                <label htmlFor="username">Username</label>
                {this.returnUsernameEmpty()}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  value={this.props.password}
                  onChange={this.props.handlePasswordChange}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            {this.returnPasswordConfirm()}
          </form>
        </div>
        <div className="row">
          <div className="col s10 offset-s1">
            <a className="btn left" onClick={this.props.closeGateway}>
              Cancel
            </a>
            <a
              className="btn right"
              onClick={
                this.props.pathname === '/login'
                  ? this.props.loginSubmitForm
                  : this.props.registerSubmitForm
              }
            >
              Submit
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default AuthForm;
