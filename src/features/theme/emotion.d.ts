import '@emotion/react';
import { Breakpoints } from './createBreakpoints';
import { Spacing } from './createSpacing';

declare module '@emotion/react' {
  export interface Theme {
    palette: Record<string, any>;
    breakpoints: Breakpoints;
    spacing: Spacing;
  }
}
