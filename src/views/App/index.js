import React from 'react';
import './styles.css';

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
        <div className="display">
          <span>{currentValue}</span>
        </div>
        <div className="controls">
          {controls.map((control, index) => {
            const { className, text } = control;
            return (
              <button
                key={index}
                className={'button'.concat(className ? ` ${className}` : '')}
              >
                <span>{text}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
