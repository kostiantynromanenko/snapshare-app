import React from 'react';
import { Button as StyledButton } from './styled';
import { StyleVariant } from '../utils/styleVariant';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  fullWidth?: boolean;
  variant?: StyleVariant;
};

export const Button = ({ children, ...props }: ButtonProps): JSX.Element => (
  <StyledButton {...props}>{children}</StyledButton>
);
