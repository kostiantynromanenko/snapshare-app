import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 450px auto;
  grid-template-rows: auto 60px;
  grid-template-areas:
    'content bg-image'
    'footer footer';
  height: 100vh;

  ${({ theme }) => theme.breakpoints.up('mobile')} {
    grid-template-columns: 100% 0;
  }
`;

export const ImageSection = styled.div`
  grid-area: bg-image;
  background-image: url(https://source.unsplash.com/random);
  background-color: ${({ theme }) => theme.palette.primary.main};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4, 4)};
  background-color: ${({ theme }) => theme.palette.common.white};
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
`;

export const Footer = styled.footer`
  grid-area: footer;
  background-color: ${({ theme }) => theme.palette.grey[200]};
`;
