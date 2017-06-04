import React from 'react';
import { string } from 'prop-types';
import './styles.css';

const Display = ({ value }) => (
  <div className="display">
    <span>{value}</span>
  </div>
);

Display.propTypes = {
  value: string,
};

export default Display;
