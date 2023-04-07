import React from 'react';
import { Outlet } from 'react-router-dom';
import { makePrivate, useAuth } from '@features/auth';
import { Loader } from '@features/ui';
import { Header } from '@features/layout';
import { Container, Content, Footer, Sidebar } from './styled';

export const Home = (): JSX.Element => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Loader />;
  }

  return makePrivate(
    <Container>
      <Header />
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  );
};
