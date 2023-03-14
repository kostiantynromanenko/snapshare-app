import styled from '@emotion/styled';
import { InputProps } from './Input';

export const Input = styled.input<InputProps>`
  display: block;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  border: 1px solid ${({ theme }) => theme.palette.grey[400]};
  border-radius: 6px;
  font: inherit;
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.text.primary};

  &:disabled {
    background-color: ${({ theme }) => theme.palette.actions.disabledBackground};
    color: ${({ theme }) => theme.palette.actions.disabled};
  }
`;
