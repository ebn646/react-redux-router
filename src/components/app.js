//when we difine nested routes greeting is passed to App {this.props.children}

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
