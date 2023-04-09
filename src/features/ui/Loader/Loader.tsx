import React from 'react';
import { Spinner, SpinnerProps } from '@features/ui';
import { LoaderContainer } from './styled';

export type LoaderProps = SpinnerProps;

export const Loader = ({
  variant = 'primary',
  size = 64,
  thickness = 8
}: LoaderProps): JSX.Element => (
  <LoaderContainer>
    <Spinner variant={variant} size={size} thickness={thickness} />
  </LoaderContainer>
);
