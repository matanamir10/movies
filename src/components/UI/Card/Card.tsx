import React, { ReactNode } from 'react';
import classes from './Card.module.css';
import classNames from 'classnames';

type CardProps = {
  children: ReactNode;
  cardHeader?: string | ReactNode;
  className?: string;
};

const Card = ({ cardHeader, className, children }: CardProps) => {
  return (
    <div className={classNames(classes.card, className)}>
      <h4 className={classes.card__header}>{cardHeader}</h4>
      {children}
    </div>
  );
};

export default Card;
