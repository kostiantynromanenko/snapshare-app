import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { isValidEmail, isValidUsername, passwordRegex } from '@features/validation';
import { Button, ErrorMessage, Input } from '@features/ui';
import { Form } from './styled';

type SignInFormValues = {
  username: string;
  password: string;
};

export const SignInForm = (): JSX.Element => {
  const { handleSubmit, touched, errors, getFieldProps } = useFormik<SignInFormValues>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: () => {},
  });

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <Input {...getFieldProps('username')} placeholder="Username or Password" fullWidth />
        {touched.username && errors.username ? <ErrorMessage message={errors.username} /> : null}
      </fieldset>
      <fieldset>
        <Input type="password" {...getFieldProps('password')} placeholder="Password" fullWidth />
        {touched.password && errors.password ? <ErrorMessage message={errors.password} /> : null}
      </fieldset>
      <Button type="submit" color="secondary" fullWidth>
        Sign In
      </Button>
    </Form>
  );
};
