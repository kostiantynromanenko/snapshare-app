import React from 'react';
import { ThemeVariant } from '@features/theme';
import { PropsWithClassName } from '@features/utils';
import { getComponentClass } from '../utils/classnames';
import { StyledSpinner } from './styled';

export interface SpinnerProps extends PropsWithClassName {
  variant?: ThemeVariant;
  size?: number;
  thickness?: number;
}

export const Spinner = ({
  variant = 'primary',
  size = 64,
  thickness = 8,
  className
}: SpinnerProps): JSX.Element => (
  <StyledSpinner
    className={getComponentClass('spinner', className, variant)}
    variant={variant}
    size={size}
    thickness={thickness}
    role="alert"
  />
);
