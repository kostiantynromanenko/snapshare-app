import styled from '@emotion/styled';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.palette.grey[200]};
  z-index: 1;
`;
