import { Theme } from '@emotion/react';
import { createTheme } from '@features/theme';

export const defaultTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#3a98b9',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#fff1dc',
      contrastText: '#000000',
    },
    error: {
      main: '#eb455f',
      contrastText: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      disabled: 'rgba(0, 0, 0, 0.35)',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    actions: {
      disabledBackground: 'rgba(100, 100, 100, 0.1)',
      disabledOpacity: 0.5,
      hoverOpacity: 0.9,
    },
    grey: {
      50: '#fafafa',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e93',
      600: '#757575',
      700: '#616161',
      800: '#424242',
    },
  },
});
