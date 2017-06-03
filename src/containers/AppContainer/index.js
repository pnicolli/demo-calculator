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

  invertSign = () => {
    this.setState((prevState, props) => ({
      currentValue: prevState.currentValue * (-1),
    }));
  };

  render() {
    return (
      <App />
    );
  }
}

export default AppContainer;
