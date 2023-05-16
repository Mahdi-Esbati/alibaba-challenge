import type React from 'react';
import Header from './components/Header';
import Button from '../../uikit/Button';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header title="Where in the world?">
        <Button>Dark Mode</Button>
      </Header>

      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
