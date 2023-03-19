import { deepmerge } from 'deepmerge-ts';
import { systemTheme } from './systemTheme';

export type ThemeVariant = 'primary' | 'secondary' | 'error' | 'success';

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
