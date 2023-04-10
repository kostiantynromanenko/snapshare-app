import React, { useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { useOktaAuth } from '@okta/okta-react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { FEATURES_CONFIG, OKTA_GOOGLE_IDP } from '@config';
import { PASSWORD_REGEX } from '@features/validation';
import { Button, ErrorMessage, TextField } from '@features/ui';
import { OktaErrorCodes, OktaErrorResponse } from '@features/auth';
import { Form, StyledIcon } from './styled';

interface SignInFormValues {
  email: string;
  password: string;
}

export const LoginForm = (): JSX.Element => {
  const { oktaAuth } = useOktaAuth();
  const { t } = useTranslation();
  const [errorMessageKey, setErrorMessageKey] = useState('');

  const initialValues: SignInFormValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('validation.email.invalid'))
      .required(t('validation.email.required')),
    password: Yup.string()
      .matches(PASSWORD_REGEX, t('validation.password.invalid'))
      .required(t('validation.password.required'))
  });

  const handleSubmit = async (
    { email, password }: SignInFormValues,
    { setSubmitting }: FormikHelpers<SignInFormValues>
  ): Promise<void> => {
    setErrorMessageKey('');

    try {
      const transaction = await oktaAuth.signInWithCredentials({ username: email, password });

      if (!transaction.sessionToken) {
        setErrorMessageKey('error.invalid.credentials');
      }

      await oktaAuth.signInWithRedirect({ sessionToken: transaction.sessionToken });
    } catch (error) {
      const err = error as OktaErrorResponse;

      setErrorMessageKey(
        err.errorCode === OktaErrorCodes.AUTH_EXCEPTION
          ? 'error.invalid.credentials'
          : 'error.auth.service'
      );
    }

    setSubmitting(false);
  };

  const handleSignInWithGoogle = async (): Promise<void> => {
    await oktaAuth.signInWithRedirect({ idp: OKTA_GOOGLE_IDP });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, ...formik }) => (
        <Form onSubmit={formik.handleSubmit} role="form">
          {errorMessageKey && <ErrorMessage message={t(errorMessageKey)} align="center" />}
          <TextField
            name="email"
            placeholder={t('login.email.placeholder')}
            disabled={isSubmitting}
            fullWidth
          />
          <TextField
            type="password"
            name="password"
            placeholder={t('login.password.placeholder')}
            disabled={isSubmitting}
            fullWidth
          />
          <Button type="submit" loading={isSubmitting} fullWidth>
            {t('login.submit')}
          </Button>
          {FEATURES_CONFIG.googleLoginEnabled && (
            <Button
              onClick={() => handleSignInWithGoogle()}
              disabled={isSubmitting}
              variant="secondary"
              fullWidth
            >
              <StyledIcon code="google" />
              {t('login.google')}
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
};
