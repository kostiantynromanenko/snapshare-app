import React from 'react';
import { SignInForm } from '@features/sign-in';
import { Copyright } from '@features/layout';
import { Container, Content, ContentBox, ImageSection, LangSwitcher } from './styled';

export const Landing = (): JSX.Element => (
  <Container>
    <LangSwitcher />
    <ContentBox>
      <Content>
        <SignInForm />
        <Copyright />
      </Content>
      <ImageSection />
    </ContentBox>
  </Container>
);
