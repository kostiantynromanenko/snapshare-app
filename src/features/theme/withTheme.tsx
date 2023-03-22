import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { createTheme } from '@features/theme/createTheme';

export const withTheme = (component: JSX.Element, theme: DefaultTheme): JSX.Element => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);

export const withSystemTheme = (component: JSX.Element): JSX.Element =>
  withTheme(component, createTheme({}));
