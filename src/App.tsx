import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CountryList from './pages/CountryList';
import CountryDetails from './pages/CountryDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CountryList />,
  },
  {
    path: '/details/*',
    element: <CountryDetails />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
