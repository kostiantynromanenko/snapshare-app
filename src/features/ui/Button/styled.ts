import styled from 'styled-components';
import { SpinnerProps } from '@features/ui';
import { getVariantColor, getVariantTextColor } from '../utils/getColors';
import { ButtonProps } from './Button';

export const Button = styled.button<ButtonProps>`
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

export const ButtonSpinner = styled.div<SpinnerProps>`
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing()};
  border-top-color: ${getVariantTextColor()} !important;
  border-bottom-color: ${getVariantTextColor()} !important;
`;
