import { deepmerge } from 'deepmerge-ts';
import { systemTheme } from './systemTheme';
import { ThemeVariant } from './themeVariant';

type PaletteColorOption = {
  main?: string;
  contrastText?: string;
};

export type PaletteOptions = Record<string, any> & {
  [key in ThemeVariant]?: PaletteColorOption;
};

export type Palette = typeof systemTheme.palette & Record<string, any>;

export const createPalette = (palette: PaletteOptions = {}): Palette =>
  deepmerge(systemTheme.palette, palette) as Palette;
