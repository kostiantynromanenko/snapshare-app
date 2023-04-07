import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Amplify } from 'aws-amplify';
import { ProvideAuth } from '@features/auth';
import { AWS_AUTH_CONFIG } from '@config';
import './config/i18n';
import { defaultTheme, GlobalStyles } from './theming';
import App from './App';

Amplify.configure({ Auth: AWS_AUTH_CONFIG });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProvideAuth>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ProvideAuth>
  </React.StrictMode>
);
