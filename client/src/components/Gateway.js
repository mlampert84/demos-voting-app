import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AuthWindow from './authFlow/AuthWindow';

// import { connect } from 'react-redux';

class Gateway extends Component {
  closeGateway = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <div className="greyout" onClick={this.closeGateway} />
        <AuthWindow closeGateway={this.closeGateway} />
      </div>
    );
  }
}

export default withRouter(Gateway);
