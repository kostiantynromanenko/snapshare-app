import React from 'react';
import { LoginForm } from '@features/login';
import { Copyright } from '@features/layout';
import { Container, Content, ContentBox, ImageSection, LangSwitcher } from './styled';

export const Landing = (): JSX.Element => (
  <Container>
    <LangSwitcher />
    <ContentBox>
      <Content>
        <LoginForm />
        <Copyright />
      </Content>
      <ImageSection />
    </ContentBox>
  </Container>
);
