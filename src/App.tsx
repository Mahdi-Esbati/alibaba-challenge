import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CountryList from './pages/CountryList';
import CountryDetails from './pages/CountryDetails';
import MainLayout from './components/layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    children: [
      {
        path: 'details/:countryName',
        element: <CountryDetails />,
      },
      {
        path: '/',
        element: <CountryList />,
      },
    ],
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
