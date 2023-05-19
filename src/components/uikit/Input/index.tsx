import React, { forwardRef } from 'react';
import Styles from './input.module.css';
import classNames from '../../../utils/classNames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  icon?: IconProp;
}

const Input = forwardRef<HTMLInputElement, Props>(({ children, className, icon, ...props }, ref) => {
  return (
    <div className={classNames(Styles.Input, className)}>
      {icon && <FontAwesomeIcon icon={icon} className={Styles.Input__icon} />}
      <input {...props} ref={ref} />
      {children}
    </div>
  );
});

export default Input;
