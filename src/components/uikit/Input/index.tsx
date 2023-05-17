import type React from 'react';
import Styles from './input.module.css';
import classNames from '../../../utils/classNames';

type Props = React.HTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <input className={classNames(Styles.Input, className)} {...props}>
      {children}
    </input>
  );
};

export default Input;
