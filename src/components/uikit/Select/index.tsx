import type React from 'react';
import Styles from './select.module.css';
import classNames from '../../../utils/classNames';

type Props = React.HTMLAttributes<HTMLSelectElement>;

const Select: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <select className={classNames(Styles.Select, className)} {...props}>
      {children}
    </select>
  );
};

export default Select;
