import styled from 'styled-components';
import { getVariantColor, getVariantTextColor } from '../utils/getColors';
import { ButtonProps } from './Button';

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  border: none;
  border-radius: 6px;
  background-color: ${getVariantColor()};
  color: ${getVariantTextColor()};
  font: inherit;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.5;

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

export const ButtonSpinner = styled.div`
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing()};
  border-top-color: ${getVariantTextColor()};
  border-bottom-color: ${getVariantTextColor()};
`;
