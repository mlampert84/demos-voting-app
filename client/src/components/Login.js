import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';
import LoginForm from './LoginForm.js';
//Note: is you modify the props and functionhandlers passed to LoginForm
// then make sure to also modify loginFields.js!

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  // clearForm() {
  //   this.setState({ username: '', password: '' });
  // }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  submitForm = () => {
    window.alert('Submitted!');
  };

  modalButtons = () => (
    <div>
      <Button modal="close" className="left">
        Back
      </Button>
      <Button onClick={this.submitForm}>Log In</Button>
    </div>
  );

  render() {
    return (
      <Modal
        header="Sign In"
        trigger={<Button>Sign In</Button>}
        actions={this.modalButtons()}
      >
        <LoginForm
          username={this.state.username}
          password={this.state.password}
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
        />
      </Modal>
    );
  }
}

export default Login;
