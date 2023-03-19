import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
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
    setErrorMessage('');

    const result = await signIn(username, password);

    if (result.success) {
      navigate('../');
    } else if (result.errorMessage) {
      setErrorMessage(result.errorMessage);
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, ...formik }) => (
        <Form onSubmit={formik.handleSubmit}>
          {errorMessage && <ErrorMessage message={errorMessage} align="center" />}
          <TextField
            name="username"
            placeholder="Enter your username or email"
            disabled={isSubmitting}
            fullWidth
          />
          <TextField
            type="password"
            name="password"
            placeholder="Enter you password"
            disabled={isSubmitting}
            fullWidth
          />
          <Button type="submit" fullWidth loading={isSubmitting}>
            Sign In
          </Button>
        </Form>
      )}
    </Formik>
  );
};
