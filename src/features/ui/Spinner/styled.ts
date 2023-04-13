import styled, { css, keyframes } from 'styled-components';
import { ThemeVariant } from '@features/theme';
import { getVariantColor } from '../utils/getColors';

interface StyledSpinnerProps {
  readonly variant: ThemeVariant;
  readonly $size: number;
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
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;
  border-style: solid;
  border-color: ${getVariantColor()} transparent ${getVariantColor()} transparent;

  ${({ $size, thickness }) => css`
    width: ${$size}px;
    height: ${$size}px;
    border-width: ${thickness}px;
  `}
`;
