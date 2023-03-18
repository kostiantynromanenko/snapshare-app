import React from 'react';
import { StyledSpinner } from './styled';
import { StyleVariant } from '../utils/styleVariant';

export interface SpinnerProps {
  className?: string;
  variant?: StyleVariant;
  size?: number;
  thickness?: number;
}

export const Spinner = (props: SpinnerProps): JSX.Element => <StyledSpinner {...props} />;
