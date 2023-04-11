import { DefaultTheme } from 'styled-components';
import { BreakpointsOptions, createBreakpoints } from './createBreakpoints';
import { createSpacing } from './createSpacing';
import { createPalette, PaletteOptions } from './createPalette';

interface ThemeOptions {
  palette?: PaletteOptions;
  breakpoints?: BreakpointsOptions;
  spacing?: number;
  [key: string]: any;
}

export const createTheme = ({
  palette,
  spacing,
  breakpoints,
  ...options
}: ThemeOptions): Readonly<DefaultTheme> => ({
  ...options,
  palette: createPalette(palette),
  breakpoints: createBreakpoints(breakpoints),
  spacing: createSpacing(spacing)
});
