import React from 'react';
import { number } from 'prop-types';
import './styles.css';

const Display = ({ value }) => (
  <div className="display">
    <span>{value}</span>
  </div>
);

Display.propTypes = {
  value: number,
};

export default Display;
