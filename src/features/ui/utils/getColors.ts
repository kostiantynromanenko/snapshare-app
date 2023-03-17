import { Theme } from '@emotion/react';
import { StyleVariant } from './styleVariant';

type GetColorArgs = { variant?: StyleVariant; theme: Theme };

export const getVariantColor =
  () =>
  ({ variant = 'primary', theme }: GetColorArgs) =>
    theme.palette[variant].main;

export const getVariantTextColor =
  () =>
  ({ variant = 'primary', theme }: GetColorArgs) =>
    theme.palette[variant].contrastText;
