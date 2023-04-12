import { Button, Icon } from '@features/ui';
import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
`;

export const StyledIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

export const GoogleLoginButton = styled(Button)`
  ${({ theme }) => css`
    background-color: ${theme.palette.grey[700]};
    color: ${theme.palette.common.white};
  `}
`;
