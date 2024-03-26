import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from 'styles/GlobalStyles';
import 'styles/font.css';
import Root from 'pages/Root';
import Splash from 'pages/Splash/Splash';
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';
import Home from 'pages/Home/Home';
import Product from 'pages/Product/Product';
import Cart from 'pages/Cart/Cart';
import NotFound from 'pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    path: '/',
    index: true,
    element: <Splash />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/login/signup',
    element: <Signup />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/products/:productId',
    element: <Product />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
export default App;
