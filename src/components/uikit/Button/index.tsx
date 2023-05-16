import type React from 'react';
import Styles from './button.module.css';
import classNames from '../../../utils/classNames';

type Props = React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button className={classNames(Styles.Button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
