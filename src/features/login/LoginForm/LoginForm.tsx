import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { useOktaAuth } from '@okta/okta-react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { FEATURES_CONFIG, OKTA_GOOGLE_IDP } from '@config';
import { PASSWORD_REGEX } from '@features/validation';
import { Button, ErrorMessage, TextField } from '@features/ui';
import { Form, GoogleLoginButton, StyledIcon } from './styled';
import { useLogin } from '../useLogin';

interface SignInFormValues {
  email: string;
  password: string;
}

export const LoginForm = (): JSX.Element => {
  const { oktaAuth } = useOktaAuth();
  const { t } = useTranslation();
  const { errorMessage, loginWithRedirect } = useLogin();

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
    await loginWithRedirect(email, password);
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
          {errorMessage && <ErrorMessage message={errorMessage} align="center" />}
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
            <GoogleLoginButton
              onClick={() => handleSignInWithGoogle()}
              disabled={isSubmitting}
              fullWidth
            >
              <StyledIcon code="google" />
              {t('login.google')}
            </GoogleLoginButton>
          )}
        </Form>
      )}
    </Formik>
  );
};
