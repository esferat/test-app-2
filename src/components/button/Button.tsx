import React from 'react';
import './Button.scss';

type ButtonProps = {
  label: string;
  onClick?(event?: React.MouseEvent<HTMLButtonElement>): void;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button onClick={props.onClick}>
      <span>{props.label}</span>
    </button>
  );
};

export default Button;
