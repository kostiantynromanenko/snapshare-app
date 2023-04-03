import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 360px auto;
  grid-template-rows: 60px auto 60px;
  grid-template-areas:
    'header header'
    'sidebar content'
    'footer footer';
  height: 100vh;
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Content = styled.main`
  grid-area: content;
  padding: ${({ theme }) => theme.spacing(3)};
`;

export const Footer = styled.footer`
  grid-area: footer;
  background-color: ${({ theme }) => theme.palette.grey[200]};
`;
