import React, { HTMLProps } from 'react';
import classes from './Input.module.css';
import classnames from 'classnames';

type InputProps = HTMLProps<HTMLInputElement> & {
  className?: string;
};

const Input = ({ type = 'text', className, ...inputProps }: InputProps) => {
  return <input type={type} className={classnames(classes.input, className)} {...inputProps} />;
};

export default Input;
