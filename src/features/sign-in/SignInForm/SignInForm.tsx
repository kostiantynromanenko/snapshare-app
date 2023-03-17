import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { isValidEmail, isValidUsername, passwordRegex } from '@features/validation';
import { Button, ErrorMessage, TextField } from '@features/ui';
import { useAuth } from '@features/auth';
import { Form } from './styled';

type SignInFormValues = {
  username: string;
  password: string;
};

export const SignInForm = (): JSX.Element => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const initialValues: SignInFormValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .test(
        'username-validator',
        'Enter valid username/email',
        (value = '') => !(!isValidEmail(value) && !isValidUsername(value)),
      )
      .required('Enter username/email'),
    password: Yup.string()
      .matches(passwordRegex, 'Enter valid password')
      .required('Enter password'),
  });

  const handleSubmit = async (
    { username, password }: SignInFormValues,
    { setSubmitting }: FormikHelpers<SignInFormValues>,
  ): Promise<void> => {
    try {
      const cognitoUser: CognitoUser | undefined = await signIn(username, password);
      if (cognitoUser) {
        navigate('../');
      }
    } catch (error: any) {
      const { message } = error;
      if (message) {
        setErrorMessage(message);
      }
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <TextField name="username" placeholder="Enter your username or email" fullWidth />
          <TextField type="password" name="password" placeholder="Enter you password" fullWidth />
          <Button type="submit" fullWidth loading={formik.isSubmitting}>
            Sign In
          </Button>
          <ErrorMessage message={errorMessage} />
        </Form>
      )}
    </Formik>
  );
};
