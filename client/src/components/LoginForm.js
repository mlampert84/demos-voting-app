import React, { Component } from 'react';
import _ from 'lodash';
import loginFields from './loginFields';

class LoginForm extends Component {
  renderFields = () => {
    return _.map(loginFields, ({ placeholder, type, propName, funcName }) => {
      return (
        <div className="row" key={placeholder}>
          <div className="input-field col s12">
            <input
              id={placeholder}
              type={type}
              value={this.props[propName]}
              onChange={this.props[funcName]}
            />
            <label className="active" htmlFor={placeholder}>
              {placeholder}
            </label>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12">{this.renderFields()}</form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
