import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Loader } from '@features/ui';
import { makePrivate, useAuth } from '@features/auth';
import { SignIn } from '@features/sign-in';

const router = createBrowserRouter([
  {
    path: '/',
    element: makePrivate(<div>Hello</div>),
  },
  {
    path: 'login',
    element: <SignIn />,
  },
]);

const App = (): JSX.Element => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Loader size={100} />;
  }

  return <RouterProvider router={router} />;
};

export default App;
