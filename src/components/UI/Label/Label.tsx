import React, { HTMLProps } from 'react';
import classes from './Label.module.css';
import classNames from 'classnames';

type LabelProps = HTMLProps<HTMLLabelElement> & {
  className?: string;
};

const Label = ({ className, children, ...labelProps }: LabelProps) => {
  return (
    <label className={classNames(classes.label, className)} {...labelProps}>
      {children}
    </label>
  );
};

export default Label;
