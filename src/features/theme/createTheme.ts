import { Theme } from '@emotion/react';
import { BreakpointsOptions, createBreakpoints } from './createBreakpoints';
import { createSpacing } from './createSpacing';

interface ThemeOptions {
  palette: Record<string, any>;
  breakpoints?: BreakpointsOptions;
  spacing?: number;
}

export const createTheme = ({ palette, spacing, breakpoints }: ThemeOptions): Theme => ({
  palette,
  breakpoints: createBreakpoints(breakpoints),
  spacing: createSpacing(spacing),
});
