import React from 'react';
import { ThemeVariant } from '@features/theme';
import { Spinner } from '@features/ui';
import { StyledButton, ButtonSpinner } from './styled';
import { getComponentClass } from '../utils/classnames';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: ThemeVariant;
  fullWidth?: boolean;
  loading?: boolean;
};

export const Button = ({
  type,
  className,
  children,
  disabled,
  loading,
  variant = 'primary',
  ...props
}: ButtonProps): JSX.Element => (
  <StyledButton
    type={type || 'button'}
    className={getComponentClass('btn', className, variant)}
    variant={variant}
    disabled={disabled || loading}
    {...props}
  >
    {children}
    {loading && <ButtonSpinner as={Spinner} variant={variant} size={20} thickness={3} />}
  </StyledButton>
);
