import Header from './components/Header';
import Button from '../../uikit/Button';
import { Outlet } from 'react-router-dom';

import Styles from './main-layout.module.css';
import classNames from '../../../utils/classNames';

const MainLayout = () => {
  return (
    <div className={Styles.MainLayout}>
      <Header title="Where in the world?">
        <Button>Dark Mode</Button>
      </Header>

      <main className={classNames('d-flex jc-center', Styles.MainLayout__content)}>
        <div className="w-100">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
