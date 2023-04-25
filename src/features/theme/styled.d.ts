import 'styled-components';
import { Breakpoints } from './createBreakpoints';
import { Spacing } from './createSpacing';
import { Palette } from './createPalette';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    breakpoints: Breakpoints;
    spacing: Spacing;

    [key: string]: any;
  }
}
