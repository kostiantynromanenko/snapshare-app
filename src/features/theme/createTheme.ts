import { DefaultTheme } from 'styled-components';
import { BreakpointsOptions, createBreakpoints } from './createBreakpoints';
import { createSpacing } from './createSpacing';
import { createPalette, PaletteOptions } from './createPalette';

interface ThemeOptions {
  palette?: PaletteOptions;
  breakpoints?: BreakpointsOptions;
  spacing?: number;
}

export const createTheme = ({
  palette,
  spacing,
  breakpoints
}: ThemeOptions): Readonly<DefaultTheme> => ({
  palette: createPalette(palette),
  breakpoints: createBreakpoints(breakpoints),
  spacing: createSpacing(spacing)
});
