import styled, { css } from 'styled-components';

export const GalleryActionsContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing(3)};
  `}
`;
