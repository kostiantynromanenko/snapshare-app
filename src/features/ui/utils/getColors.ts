import { DefaultTheme } from 'styled-components';
import { StyleVariant } from './styleVariant';

type GetColorArgs = { variant?: StyleVariant; theme: DefaultTheme };

export const getVariantColor =
  () =>
  ({ variant = 'primary', theme }: GetColorArgs) =>
    theme.palette[variant].main;

export const getVariantTextColor =
  () =>
  ({ variant = 'primary', theme }: GetColorArgs) =>
    theme.palette[variant].contrastText;
