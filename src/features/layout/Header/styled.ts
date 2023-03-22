import styled from 'styled-components';
import { Button } from '@features/ui';

export const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2, 2)};
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const LogoutButton = styled(Button)`
  height: 36px;
`;
