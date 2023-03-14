import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { makePrivate } from '@features/auth';
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

const App = (): JSX.Element => <RouterProvider router={router} />;

export default App;
