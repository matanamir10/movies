import React, { ReactNode } from 'react';
import classes from './FormItem.module.css';
import classNames from 'classnames';
import Label from '../Label/Label';

type FormItemProps = {
  className?: string;
  label: string;
  children: ReactNode;
};

const FormItem = ({ className, label, children }: FormItemProps) => {
  return (
    <div className={classNames(classes['form-item'], className)}>
      <Label>{label}</Label>
      {children}
    </div>
  );
};

export default FormItem;
