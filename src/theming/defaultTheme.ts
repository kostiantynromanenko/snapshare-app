import { DefaultTheme } from 'styled-components';
import { createTheme } from '@features/theme';

export const defaultTheme: DefaultTheme = createTheme({
  palette: {
    background: {
      landing: 'rgb(237, 209, 168)'
    }
  },
  shadows: {
    1: 'rgba(0, 0, 0, 0.5) 2px 1px 5px 1px'
  }
});
