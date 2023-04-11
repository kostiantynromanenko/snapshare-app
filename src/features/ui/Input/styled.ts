import styled from 'styled-components';

interface StyledInputProps {
  readonly fullWidth?: boolean;
  readonly hasError?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  display: block;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  background-color: ${({ theme }) => theme.palette.common.white};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme, hasError }) =>
    hasError ? theme.palette.error.main : theme.palette.grey[600]};
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
