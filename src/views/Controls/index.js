import React from 'react';
import { array } from 'prop-types';
import './styles.css';
import Button from '../../views/Button';

const Controls = ({ controls }) => (
  <div className="controls">
    {controls.map((control, index) => (
      <Button key={index} {...control} />
    ))}
  </div>
);

Controls.propTypes = {
  controls: array,
};

export default Controls;
