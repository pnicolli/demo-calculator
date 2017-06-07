import React from 'react';
import './styles.css';
import Display from '../../views/Display';
import Controls from '../../views/Controls';

const App = ({
  currentValue,
}) => {

  const controls = [
    { text: 'AC', className: 'dark smaller' },
    { text: '7' },
    { text: '4' },
    { text: '1' },
    { text: '0' },
    { text: 'C', className: 'dark smaller' },
    { text: '8' },
    { text: '5' },
    { text: '2' },
    { text: '.', className: 'dark' },
    { text: '+/−', className: 'dark smaller' },
    { text: '9' },
    { text: '6' },
    { text: '3' },
    { text: '=', className: 'dark' },
    { text: '÷', className: 'dark' },
    { text: '×', className: 'dark' },
    { text: '−', className: 'dark' },
    { text: '+', className: 'dark double' },
  ];

  return (
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
};

App.propTypes = {
  currentValue: Display.propTypes.value,
  controls: Controls.propTypes.controls,
};

export default App;
