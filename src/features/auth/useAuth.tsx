import React, { createContext, useContext, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';

interface AuthResult {
  success: boolean;
  message: string;
}

interface AuthContextState {
  isLoading: boolean;
  isAuthenticated: boolean;
  username: string;
  signIn: (username: string, password: string) => Promise<CognitoUser | undefined>;
  signOut: () => void;
}

type ProvideAuthProps = {
  children?: React.ReactNode;
};

const authContext = createContext({} as AuthContextState);

export const useAuth = (): AuthContextState => useContext(authContext);

const useProvideAuth = (): AuthContextState => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((result) => {
        setUsername(result);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch(() => {
        setUsername('');
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  const signIn = async (uname: string, password: string): Promise<CognitoUser | undefined> => {
    try {
      let cognitoUser: CognitoUser = await Auth.signIn(uname, password);

      if (cognitoUser.challengeName === 'NEW_PASSWORD_REQUIRED') {
        cognitoUser = await Auth.completeNewPassword(cognitoUser, password, {
          preferred_username: uname,
        });
      }

      setUsername(uname);
      setIsAuthenticated(true);
      return cognitoUser;
    } catch (error) {
      return undefined;
    }
  };

  const signOut = async (): Promise<AuthResult> => {
    try {
      await Auth.signOut();
      setUsername('');
      setIsAuthenticated(false);
      return { success: true, message: '' };
    } catch (error) {
      return {
        success: false,
        message: 'LOGOUT FAIL',
      };
    }
  };

  return {
    isLoading,
    isAuthenticated,
    username,
    signIn,
    signOut,
  };
};

export const ProvideAuth = ({ children }: ProvideAuthProps): JSX.Element => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
