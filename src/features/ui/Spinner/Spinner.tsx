import React from 'react';
import { StyleVariant } from '../utils/styleVariant';
import { Spinner as StyledSpinner } from './styled';

export interface SpinnerProps {
  variant?: StyleVariant;
  size?: number;
  thickness?: number;
}

export const Spinner = (props: SpinnerProps): JSX.Element => <StyledSpinner {...props} />;
