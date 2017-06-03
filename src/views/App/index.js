import React from 'react';
import { func } from 'prop-types';
import './styles.css';
import Display from '../../views/Display';

const App = ({
  currentValue,
  resetState,
  resetCurrentValue,
  invertSign,
}) => (
  <div className="app">
    <div className="app-header">
      <h1>Demo - Calculator</h1>
    </div>
    <div className="app-content">
      <Display value={currentValue} />
    </div>
  </div>
);

App.propTypes = {
  currentValue: Display.propTypes.value,
  resetState: func,
  resetCurrentValue: func,
  invertSign: func,
};

export default App;
