import React from 'react';
import { ThemeVariant } from '@features/theme';
import { StyledSpinner } from './styled';

export interface SpinnerProps {
  variant?: ThemeVariant;
  size?: number;
  thickness?: number;
}

export const Spinner = (props: SpinnerProps): JSX.Element => <StyledSpinner {...props} />;
