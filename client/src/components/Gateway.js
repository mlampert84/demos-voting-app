import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import LoginForm from './LoginForm';

class Gateway extends Component {
  renderContent() {
    switch (this.props.gateway) {
      case 'log_in':
        return (
          <div>
            <div className="greyout" />
            <LoginForm />
          </div>
        );
      default:
        return;
    }
  }

  render() {
    console.log(this.props);

    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ gateway }) {
  return { gateway };
}
export default connect(mapStateToProps)(Gateway);
