import React, { Component } from 'react';
import App from '../../views/App';

class AppContainer extends Component {

  initialState = () => ({
    negativeSign: false,
    intValue: '0',
    decimalValue: '',
    showComma: false,
    firstOperand: 0,
    currentOperation: null,
    resetNumberOnNextDigit: false,
  });

  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  // AC button
  resetState = () => this.setState(this.initialState);

  // C button
  resetCurrentValue = () => this.setState((prevState, props) => (
    Object.assign(
      {},
      this.initialState(),
      {
        firstOperand: prevState.firstOperand,
        currentOperation: prevState.currentOperation,
      }
    )
  ));

  invertSign = () => this.setState((prevState, props) => ({
    negativeSign: !prevState.negativeSign,
  }));

  // concat a digit, or replace the whole string if it is just '0'
  // TODO: unit test this
  addIntDigit = (digit, numString) => (
    numString === '0' ? digit : numString.concat(digit)
  );

  // add the digit to the correct state number,
  // using showComma to decide which one is the correct one
  // TODO: unit test this
  numberClick = digit => this.setState((prevState, props) => {
    if (prevState.resetNumberOnNextDigit) {
      return Object.assign(
        {},
        this.initialState(),
        {
          intValue: digit,
          firstOperand: this.numFromState(prevState),
          currentOperation: prevState.currentOperation,
        }
      );
    }
    if (prevState.showComma) {
      return { decimalValue: prevState.decimalValue.concat(digit) };
    }
    else {
      return { intValue: this.addIntDigit(digit, prevState.intValue) };
    }
  });

  // create an actual number from the given state
  // TODO: unit test this
  numFromState = state => {
    let number = parseInt(state.intValue, 10);
    if (state.showComma && state.decimalValue !== '') {
      // compute 0.2345 from string '2345'
      const numOfDigits = state.decimalValue.length;
      const decimalNumber = parseInt(state.decimalValue, 10);
      const decimalPart = decimalNumber / Math.pow(10, numOfDigits);
      number += decimalPart;
    }
    if (state.negativeSign) {
      number *= (-1);
    }
    return number;
  };

  // set the next operation to be performed
  // TODO compute current operation, if given, before assigning the new one
  // in order to allow chaining operations
  setOperation = op => this.setState((prevState, props) => ({
    currentOperation: op,
    firstOperand: this.numFromState(prevState),
    resetNumberOnNextDigit: true,
  }));

  // start typing decimal part of the number (a.k.a. show comma)
  startDecimal = () => this.setState(() => ({
    showComma: true,
  }));

  // called when '=' is pressed TODO
  // computes operation based on the current state
  computeNow = () => this.setState((prevState, props) => this.computeOperation(prevState));

  // compute the operation described by the given state
  // TODO: unit test this
  computeOperation = state => {
    //no-op if no operation is set
    if (!state.currentOperation) {
      return state;
    }
    const firstOperand = state.firstOperand;
    const secondOperand = this.numFromState(state);
    let result;
    switch (state.currentOperation) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '/':
        // TODO handle division by 0
        result = firstOperand / secondOperand;
        break;
      case 'x':
        result = firstOperand * secondOperand;
        break;
      default:
        result = 0;
        break;
    }
    const negativeSign = result < 0;
    if (negativeSign) {
      result *= (-1);
    }
    const numStrings = result.toString().split('.');
    const hasDecimal = numStrings.length > 1;
    return Object.assign(
      {},
      this.initialState(),
      {
        intValue: numStrings[0],
        decimalValue: hasDecimal ? numStrings[1] : '',
        showComma: hasDecimal,
        negativeSign: negativeSign,
        resetNumberOnNextDigit: true,
      }
    );
  };

  // compute text to display from given state
  // TODO: unit test this
  textToDisplay = state => {
    let text = state.negativeSign ? '-' : '';
    text += state.intValue;
    if (state.showComma) {
      text += ',' + state.decimalValue;
    }
    return text;
  }

  controls = [
    { text: 'AC', className: 'dark smaller', onClick: this.resetState },
    { text: '7', onClick: () => this.numberClick('7') },
    { text: '4', onClick: () => this.numberClick('4') },
    { text: '1', onClick: () => this.numberClick('1') },
    { text: '0', onClick: () => this.numberClick('0') },
    { text: 'C', className: 'dark smaller', onClick: this.resetCurrentValue },
    { text: '8', onClick: () => this.numberClick('8') },
    { text: '5', onClick: () => this.numberClick('5') },
    { text: '2', onClick: () => this.numberClick('2') },
    { text: '.', className: 'dark', onClick: this.startDecimal },
    { text: '+/−', className: 'dark smaller', onClick: this.invertSign },
    { text: '9', onClick: () => this.numberClick('9') },
    { text: '6', onClick: () => this.numberClick('6') },
    { text: '3', onClick: () => this.numberClick('3') },
    { text: '=', className: 'dark', onClick: this.computeNow },
    { text: '÷', className: 'dark', onClick: () => this.setOperation('/') },
    { text: '×', className: 'dark', onClick: () => this.setOperation('x') },
    { text: '−', className: 'dark', onClick: () => this.setOperation('-') },
    { text: '+', className: 'dark double', onClick: () => this.setOperation('+') },
  ];

  render() {
    return (
      <App
        currentValue={this.textToDisplay(this.state)}
        controls={[...this.controls]}
      />
    );
  }
}

export default AppContainer;
