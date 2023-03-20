import React from 'react';
import { StyledErrorMessage } from './styled';
import { getComponentClass } from '../utils/classnames';

export interface ErrorMessageProps {
  className?: string;
  message: string;
  align?: 'left' | 'right' | 'center';
}

export const ErrorMessage = ({
  message,
  align = 'left',
  className,
}: ErrorMessageProps): JSX.Element => (
  <StyledErrorMessage className={getComponentClass('error', className)} align={align} role="alert">
    {message}
  </StyledErrorMessage>
);
