import React from 'react';
import { func, string } from 'prop-types';
import './styles.css';

const Button = ({
  onClick,
  text,
}) => (
  <div
    className="button"
    onClick={onClick}
  >
    <span>{text}</span>
  </div>
);

Button.propTypes = {
  onClick: func,
  text: string,
};

export default Button;
