import { Theme } from '@emotion/react';
import { StyleVariant } from './styleVariant';

type GetColorArgs = { variant?: StyleVariant; theme: Theme };

export const getBackgroundColor =
  () =>
  ({ variant = 'primary', theme }: GetColorArgs) =>
    theme.palette[variant].main;

export const getTextColor =
  () =>
  ({ variant = 'primary', theme }: GetColorArgs) =>
    theme.palette[variant].contrastText;
