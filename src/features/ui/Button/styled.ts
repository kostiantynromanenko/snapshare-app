import styled from 'styled-components';
import { ThemeVariant } from '@features/theme';
import { getVariantColor, getVariantTextColor } from '../utils/getColors';

interface StyledButtonProps {
  readonly fullWidth?: boolean;
  readonly variant: ThemeVariant;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: ${({ theme }) => theme.spacing(2)};
  border: none;
  border-radius: 6px;
  background-color: ${getVariantColor()};
  color: ${getVariantTextColor()};
  font: inherit;
  font-weight: 500;
  text-transform: uppercase;

  &:disabled {
    opacity: ${({ theme }) => theme.palette.actions.disabledOpacity};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    cursor: pointer;
    opacity: ${({ theme }) => theme.palette.actions.hoverOpacity};
  }

  &:active:not(:disabled) {
    opacity: 1 !important;
  }
`;

interface ButtonSpinnerProps {
  readonly variant: ThemeVariant;
}

export const ButtonSpinner = styled.div<ButtonSpinnerProps>`
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing()};
  border-top-color: ${getVariantTextColor()} !important;
  border-bottom-color: ${getVariantTextColor()} !important;
`;
