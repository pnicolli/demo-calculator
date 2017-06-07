import React from 'react';
import { func, string } from 'prop-types';
import './styles.css';

const Button = ({
  className,
  onClick,
  text,
}) => (
  <button
    className={'button'.concat(className ? ` ${className}` : '')}
    onClick={onClick}
  >
    <span>{text}</span>
  </button>
);

Button.propTypes = {
  className: string,
  onClick: func,
  text: string,
};

export default Button;
