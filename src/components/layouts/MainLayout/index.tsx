import Header from './components/Header';
import Button from '../../uikit/Button';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Header title="Where in the world?">
        <Button>Dark Mode</Button>
      </Header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
