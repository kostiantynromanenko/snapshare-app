import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { Loader } from '@features/ui';

export interface ProtectedRouteProps {
  element: JSX.Element;
}

export const ProtectedRoute = ({ element }: ProtectedRouteProps): JSX.Element => {
  const { oktaAuth, authState } = useOktaAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState) {
      return;
    }

    if (!authState?.isAuthenticated) {
      navigate('/login');
    }
  }, [oktaAuth, authState, navigate]);

  if (!authState || !authState?.isAuthenticated) {
    return <Loader />;
  }

  return element;
};
