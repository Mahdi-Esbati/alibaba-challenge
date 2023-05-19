import type React from 'react';
import Styles from './button.module.css';
import classNames from '../../../utils/classNames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: IconProp;
  iconPosition?: 'left' | 'right';
  large?: boolean;
}

const Button: React.FC<Props> = ({ icon, iconPosition = 'left', large = false, children, className, ...props }) => {
  return (
    <button className={classNames(Styles.Button, { [Styles.Button__large]: large }, className)} {...props}>
      {icon && iconPosition === 'left' && <FontAwesomeIcon className={Styles.Button__iconLeft} icon={icon} />}
      {children}
      {icon && iconPosition === 'right' && <FontAwesomeIcon className={Styles.Button__iconRight} icon={icon} />}
    </button>
  );
};

export default Button;
