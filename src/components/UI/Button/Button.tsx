import React, { HTMLProps } from 'react';
import classes from './Button.module.css';
import classNames from 'classnames';

type ButtonProps = HTMLProps<HTMLButtonElement>;

const Button = ({ children, ...buttonProps }: HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      {...buttonProps}
      className={classNames(classes.button, classes['button--block'])}
      type="submit">
      {children}
    </button>
  );
};

export default Button;
