import styled, { keyframes } from 'styled-components';
import { getVariantColor } from '../utils/getColors';
import { SpinnerProps } from './Spinner';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div<SpinnerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: ${({ thickness }) => thickness}px solid;
  border-color: ${getVariantColor()} transparent ${getVariantColor()} transparent;
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;
`;
