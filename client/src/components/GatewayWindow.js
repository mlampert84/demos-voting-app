import React, { Component } from 'react';

class GatewayWindow extends Component {
  renderContent() {
    switch (this.props.window) {
      case 'register':
        return;
      default:
        return;
    }
  }

  render() {
    return (
      <div className="gateway">
        <h1>{this.props.window}</h1>
        <h1>hey there!</h1>
      </div>
    );
  }
}

export default GatewayWindow;
