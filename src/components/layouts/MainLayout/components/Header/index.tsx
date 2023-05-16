import type React from 'react';
import Styles from './header.module.css';
interface Props {
  title: string;
  children: React.ReactNode;
}

const Header: React.FC<Props> = ({ title, children }) => {
  return (
    <header className={Styles.Header}>
      <span className="text-title">{title}</span>
      <div>{children}</div>
    </header>
  );
};

export default Header;
