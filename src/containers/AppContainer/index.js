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

  resetCurrentValue = () => {
    this.setState(() => ({
      currentValue: 0,
    }));
  };

  invertSign = () => {
    this.setState((prevState, props) => ({
      currentValue: prevState.currentValue * (-1),
    }));
  };

  render() {
    return (
      <App
        currentValue={this.state.currentValue}
        resetState={this.resetState}
        resetCurrentValue={this.resetCurrentValue}
        invertSign={this.invertSign}
      />
    );
  }
}

export default AppContainer;
