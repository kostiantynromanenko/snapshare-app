import React from 'react';
import { Navigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

export interface ProtectedRouteProps {
  element: JSX.Element;
}

export const ProtectedRoute = ({ element }: ProtectedRouteProps): JSX.Element => {
  const { authState } = useOktaAuth();
  return authState?.isAuthenticated ? element : <Navigate to="/login" />;
};
