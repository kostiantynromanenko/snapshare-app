import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
