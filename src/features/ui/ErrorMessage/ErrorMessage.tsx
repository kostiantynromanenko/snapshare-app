import React from 'react';
import { ErrorMessage as StyledErrorMessage } from './styled';

export interface ErrorMessageProps {
  message: string;
  align?: 'left' | 'right' | 'center';
}

export const ErrorMessage = ({ message, align = 'left' }: ErrorMessageProps): JSX.Element => (
  <StyledErrorMessage align={align}>{message}</StyledErrorMessage>
);
