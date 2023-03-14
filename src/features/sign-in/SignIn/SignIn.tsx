import React from 'react';
import logoImage from '@assets/images/logo.png';
import { BackgroundImageArea, Footer, FormArea, Container, Logo } from './styled';
import { SignInForm } from '../SignInForm/SignInForm';

export const SignIn = (): JSX.Element => (
  <Container>
    <FormArea>
      <Logo src={logoImage} alt="Logo" />
      <SignInForm />
    </FormArea>
    <BackgroundImageArea />
    <Footer />
  </Container>
);
