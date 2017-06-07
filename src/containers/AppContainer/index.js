import React, { Component } from 'react';
import App from '../../views/App';

class AppContainer extends Component {

  initialState = () => ({
    currentValue: 0,
  });

  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  resetState = () => {
    this.setState(this.initialState);
  };

  render() {
    return (
      <App
        currentValue={this.state.currentValue}
        resetState={this.resetState}
      />
    );
  }
}

export default AppContainer;
