import React from 'react';
import { func } from 'prop-types';
import './styles.css';
import Button from '../../views/Button';

const Controls = ({
  resetState,
  resetCurrentValue,
  invertSign,
}) => (
  <div className="controls">
    {['0','1','2','3','4','5','6','7','8','9'].map((num, index) => (
      <Button onClick={() => {}} text={num} key={index} />
    ))}
  </div>
);

Controls.propTypes = {
  resetState: func,
  resetCurrentValue: func,
  invertSign: func,
};

export default Controls;
