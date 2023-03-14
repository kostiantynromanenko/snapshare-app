import styled from '@emotion/styled';
import { ButtonProps } from './Button';
import { getBackgroundColor, getTextColor } from '../utils/getColors';

export const Button = styled.button<ButtonProps>`
  display: block;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  border: none;
  border-radius: 6px;
  background-color: ${getBackgroundColor()};
  color: ${getTextColor()};
  font: inherit;
  font-weight: 600;
  line-height: 1.5;

  &:disabled {
    opacity: ${({ theme }) => theme.palette.actions.disabledOpacity};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    cursor: pointer;
    opacity: ${({ theme }) => theme.palette.actions.hoverOpacity};
  }

  &:active {
    opacity: 1 !important;
  }
`;
