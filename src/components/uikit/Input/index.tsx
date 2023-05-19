import type React from 'react';
import Styles from './input.module.css';
import classNames from '../../../utils/classNames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  icon?: IconProp;
}

const Input: React.FC<Props> = ({ children, className, icon, ...props }) => {
  return (
    <div className={classNames(Styles.Input, className)}>
      {icon && <FontAwesomeIcon icon={icon} className={Styles.Input__icon} />}
      <input {...props} />
      {children}
    </div>
  );
};

export default Input;
