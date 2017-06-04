import React from 'react';
import './styles.css';
import Display from '../../views/Display';
import Controls from '../../views/Controls';

const App = ({
  currentValue,
  controls,
}) => (
  <div className="app">
    <div className="app-header">
      <h1>Demo - Calculator</h1>
    </div>
    <div className="app-content">
      <Display value={currentValue} />
      <Controls controls={controls} />
    </div>
  </div>
);

App.propTypes = {
  currentValue: Display.propTypes.value,
  controls: Controls.propTypes.controls,
};

export default App;
