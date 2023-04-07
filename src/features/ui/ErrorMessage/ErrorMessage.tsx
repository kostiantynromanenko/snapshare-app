import React from 'react';
import { PropsWithClassName } from '@features/utils';
import { StyledErrorMessage } from './styled';
import { getComponentClass } from '../utils/classnames';

export interface ErrorMessageProps extends PropsWithClassName {
  message: string;
  align?: 'left' | 'right' | 'center';
}

export const ErrorMessage = ({
  message,
  align = 'left',
  className
}: ErrorMessageProps): JSX.Element => (
  <StyledErrorMessage className={getComponentClass('error', className)} align={align} role="alert">
    {message}
  </StyledErrorMessage>
);
