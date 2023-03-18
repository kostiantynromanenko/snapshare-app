import React from 'react';
import { Button as StyledButton, ButtonSpinner } from './styled';
import { StyleVariant } from '../utils/styleVariant';
import { Spinner } from '@features/ui';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: StyleVariant;
  fullWidth?: boolean;
  loading?: boolean;
};

export const Button = ({ children, disabled, loading, ...props }: ButtonProps): JSX.Element => (
  <StyledButton {...props} disabled={disabled || loading}>
    {children}
    {loading && <ButtonSpinner as={Spinner} variant={props.variant} size={20} thickness={3} />}
  </StyledButton>
);
