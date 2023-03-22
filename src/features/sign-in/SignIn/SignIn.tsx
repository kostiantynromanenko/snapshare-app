import React from 'react';
import logoImage from '@assets/images/logo.png';
import { ImageSection, Footer, Content, Container, Logo } from './styled';
import { SignInForm } from '../SignInForm/SignInForm';

export const SignIn = (): JSX.Element => (
  <Container>
    <Content>
      <Logo src={logoImage} alt="Logo" />
      <SignInForm />
    </Content>
    <ImageSection />
    <Footer />
  </Container>
);
