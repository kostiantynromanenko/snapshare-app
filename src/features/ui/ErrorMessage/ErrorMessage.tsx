import React from 'react';
import { ErrorMessage as StyledErrorMessage } from './styled';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps): JSX.Element => (
  <StyledErrorMessage>{message}</StyledErrorMessage>
);
