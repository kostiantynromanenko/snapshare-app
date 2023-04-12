import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template:
    'header header' 60px
    'sidebar content' auto
    'footer footer' 60px;
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
