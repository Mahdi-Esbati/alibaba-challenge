import Header from './components/Header';
import Button from '../../uikit/Button';
import { Outlet } from 'react-router-dom';

import Styles from './main-layout.module.css';
import classNames from '../../../utils/classNames';
import useDarkMode from '../../../hooks/useDarkMode';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const MainLayout = () => {
  const { isDarkModeEnabled, toggleDarkMode } = useDarkMode();

  return (
    <div className={Styles.MainLayout}>
      <Header title="Where in the world?">
        <Button icon={isDarkModeEnabled ? faSun : faMoon} onClick={toggleDarkMode}>
          {isDarkModeEnabled ? 'Light Mode' : 'Dark Mode'}{' '}
        </Button>
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
