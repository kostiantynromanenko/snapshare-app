import React from 'react';
import { LoginForm } from '@features/login';
import { Copyright } from '@features/layout';
import { Container, Content, ContentBox, ImageSection, LangSwitcher, WordMark } from './styled';

export const Landing = (): JSX.Element => (
  <Container>
    <LangSwitcher />
    <ContentBox>
      <Content>
        <WordMark>snapshare</WordMark>
        <LoginForm />
        <Copyright />
      </Content>
      <ImageSection />
    </ContentBox>
  </Container>
);
