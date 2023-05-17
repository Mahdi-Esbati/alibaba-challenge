import type React from 'react';
import Styles from './header.module.css';
import classNames from '../../../../../utils/classNames';
interface Props {
  title: string;
  children: React.ReactNode;
}

const Header: React.FC<Props> = ({ title, children }) => {
  return (
    <header className={classNames('d-flex jc-center shadow-main', Styles.Header)}>
      <div className="d-flex jc-between grow-1">
        <span className="text-title">{title}</span>
        <div>{children}</div>
      </div>
    </header>
  );
};

export default Header;
