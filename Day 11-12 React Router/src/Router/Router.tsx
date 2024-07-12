import { createBrowserRouter } from 'react-router-dom';
import { Home, LoginPage, SignupPage, Cart } from '../pages';

const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/signup',
      element: <SignupPage />
    },
    {
      path: '/cart',
      element: <Cart />
    }
  ]);

export default router;
