import React from 'react';
import signInLogo from '@assets/images/logo.png';
import { SignInForm } from '@features/sign-in';
import { ImageSection, Footer, Content, Container, Logo } from './styled';

export const SignIn = (): JSX.Element => (
  <Container>
    <Content>
      <Logo src={signInLogo} alt="Logo" />
      <SignInForm />
    </Content>
    <ImageSection />
    <Footer />
  </Container>
);
