import React from 'react';
import './styles.css';
import Display from '../../views/Display';
import Controls from '../../views/Controls';

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
      <Controls
        resetState={resetState}
        resetCurrentValue={resetCurrentValue}
        invertSign={invertSign}
      />
    </div>
  </div>
);

App.propTypes = {
  currentValue: Display.propTypes.value,
  resetState: Controls.propTypes.resetState,
  resetCurrentValue: Controls.propTypes.resetCurrentValue,
  invertSign: Controls.propTypes.invertSign,
};

export default App;
