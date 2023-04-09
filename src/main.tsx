import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FeatureFlagsProvider } from '@features/feature-flags';
import './config/i18n';
import { defaultTheme, GlobalStyles } from './theming';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <FeatureFlagsProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </FeatureFlagsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
