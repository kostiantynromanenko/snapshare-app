import styled, { css } from 'styled-components';

interface StyledInputProps {
  readonly fullWidth?: boolean;
  readonly hasError?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  display: block;
  border-width: 2px;
  border-style: solid;
  border-radius: 6px;
  font: inherit;
  line-height: 1.5;

  ${({ theme, hasError, fullWidth }) => css`
    width: ${fullWidth ? '100%' : 'auto'};
    padding: ${theme.spacing(1.5, 2)};
    background-color: ${theme.palette.common.white};
    border-color: ${hasError ? theme.palette.error.main : theme.palette.grey[600]};
    color: ${theme.palette.text.primary};

    &:disabled {
      background-color: ${theme.palette.actions.disabledBackground};
      color: ${theme.palette.text.disabled};
      cursor: not-allowed;
    }
  `}
`;
