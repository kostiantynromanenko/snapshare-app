import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, css, useTheme } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const GlobalStyles = (): JSX.Element => {
  const { palette } = useTheme();
  return (
    <Global
      styles={css`
        ${emotionReset}
        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }

        body {
          font-family: 'Roboto', sans-serif;
          color: ${palette.text.primary};
        }
      `}
    />
  );
};
