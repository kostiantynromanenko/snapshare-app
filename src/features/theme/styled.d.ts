import 'styled-components';
import { Breakpoints } from './createBreakpoints';
import { Spacing } from './createSpacing';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Record<string, any>;
    breakpoints: Breakpoints;
    spacing: Spacing;
  }
}
