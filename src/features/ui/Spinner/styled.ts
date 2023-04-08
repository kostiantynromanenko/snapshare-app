import styled, { keyframes } from 'styled-components';
import { ThemeVariant } from '@features/theme';
import { getVariantColor } from '../utils/getColors';

interface StyledSpinnerProps {
  readonly variant: ThemeVariant;
  readonly size: number;
  readonly thickness: number;
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div<StyledSpinnerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: ${({ thickness }) => thickness}px solid;
  border-color: ${getVariantColor()} transparent ${getVariantColor()} transparent;
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;
`;
