import React from 'react';
import { SignInForm } from '@features/sign-in';
import { Container, Content, ImageSection } from './styled';

export const Landing = (): JSX.Element => (
  <Container>
    <Content>
      <SignInForm />
      <ImageSection />
    </Content>
  </Container>
);
