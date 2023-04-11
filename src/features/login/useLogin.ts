import { useState } from 'react';
import { OktaErrorCodes, OktaErrorResponse } from '@features/auth';
import { useTranslation } from 'react-i18next';
import { useOktaAuth } from '@okta/okta-react';

interface UseLogin {
  errorMessage: string;
  loginWithRedirect: (username: string, password: string) => Promise<void>;
}

export const useLogin = (): UseLogin => {
  const { t } = useTranslation();
  const { oktaAuth } = useOktaAuth();
  const [errorMessage, setErrorMessage] = useState('');

  const loginWithRedirect = async (username: string, password: string): Promise<void> => {
    setErrorMessage('');

    try {
      const transaction = await oktaAuth.signInWithCredentials({ username, password });

      if (!transaction.sessionToken) {
        setErrorMessage(t('error.invalid.credentials'));
      }

      await oktaAuth.signInWithRedirect({ sessionToken: transaction.sessionToken });
    } catch (error) {
      const err = error as OktaErrorResponse;

      setErrorMessage(
        t(
          err.errorCode === OktaErrorCodes.AUTH_EXCEPTION
            ? 'error.invalid.credentials'
            : 'error.auth.service'
        )
      );
    }
  };

  return {
    loginWithRedirect,
    errorMessage
  };
};
