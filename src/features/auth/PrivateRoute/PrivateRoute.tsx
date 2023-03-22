import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../useAuth';

type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export const makePrivate = (component: JSX.Element): JSX.Element => (
  <PrivateRoute>{component}</PrivateRoute>
);
