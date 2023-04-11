export const THEME_VARIANTS = ['primary', 'secondary', 'success', 'error'] as const;
export type ThemeVariant = (typeof THEME_VARIANTS)[number];
