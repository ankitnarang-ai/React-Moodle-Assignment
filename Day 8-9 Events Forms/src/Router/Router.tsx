import { createBrowserRouter } from 'react-router-dom';
import { Home, LoginPage, SignupPage } from '../pages';
import { CheckLogin } from '../components';

const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />
    },
    {
      path: '/home',
      element: <CheckLogin />,
      children : [
        {
          path: '',
          element: <Home />
        }
      ]
    },
    {
      path: '/signup',
      element: <SignupPage />
    }
  ]);

export default router;
