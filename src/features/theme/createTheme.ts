import { DefaultTheme } from 'styled-components';
import { BreakpointsOptions, createBreakpoints } from './createBreakpoints';
import { createSpacing } from './createSpacing';

interface ThemeOptions {
  palette: Record<string, any>;
  breakpoints?: BreakpointsOptions;
  spacing?: number;
}

export const createTheme = ({ palette, spacing, breakpoints }: ThemeOptions): DefaultTheme => ({
  palette,
  breakpoints: createBreakpoints(breakpoints),
  spacing: createSpacing(spacing),
});
