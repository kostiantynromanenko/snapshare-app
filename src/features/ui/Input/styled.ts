import styled from 'styled-components';
import { InputProps } from './Input';

export const StyledInput = styled.input<InputProps>`
  display: block;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 2px solid ${({ theme }) => theme.palette.grey[600]};
  border-radius: 6px;
  font: inherit;
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.text.primary};

  &:disabled {
    background-color: ${({ theme }) => theme.palette.actions.disabledBackground};
    color: ${({ theme }) => theme.palette.text.disabled};
    cursor: not-allowed;
  }
`;
