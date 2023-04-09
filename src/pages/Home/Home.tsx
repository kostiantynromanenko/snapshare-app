import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@features/layout';
import { Container, Content, Footer, Sidebar } from './styled';

export const Home = (): JSX.Element => (
  <Container>
    <Header />
    <Sidebar />
    <Content>
      <Outlet />
    </Content>
    <Footer />
  </Container>
);
