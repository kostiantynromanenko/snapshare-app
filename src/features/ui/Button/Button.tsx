import React from 'react';
import { Spinner } from '@features/ui';
import { ThemeVariant } from '@features/theme';
import { Button as StyledButton, ButtonSpinner } from './styled';
import { getComponentClass } from '@features/ui/utils/classnames';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: ThemeVariant;
  fullWidth?: boolean;
  loading?: boolean;
};

export const Button = ({
  className,
  children,
  disabled,
  loading,
  ...props
}: ButtonProps): JSX.Element => (
  <StyledButton
    {...props}
    className={getComponentClass('btn', className)}
    disabled={disabled || loading}
  >
    {children}
    {loading && <ButtonSpinner as={Spinner} variant={props.variant} size={20} thickness={3} />}
  </StyledButton>
);
