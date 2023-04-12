import styled, { css } from 'styled-components';
import { Button } from '@features/ui';

export const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  justify-content: end;
  align-items: center;

  ${({ theme }) => css`
    padding: ${theme.spacing(2)};
    background-color: ${theme.palette.primary.main};
  `}
`;

export const LogoutButton = styled(Button)`
  height: 36px;
`;
