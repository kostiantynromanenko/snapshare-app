import { DefaultTheme } from 'styled-components';
import { ThemeVariant } from '@features/theme';

type GetColorArgs = { variant: ThemeVariant; theme: DefaultTheme };

export const getVariantColor =
  () =>
  ({ variant, theme }: GetColorArgs) =>
    theme.palette[variant].main;

export const getVariantTextColor =
  () =>
  ({ variant, theme }: GetColorArgs) =>
    theme.palette[variant].contrastText;
