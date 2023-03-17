import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import { ProvideAuth } from '@features/auth/useAuth';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { awsAuthConfig } from './config/auth';
import { systemTheme, GlobalStyles } from './theming';

Amplify.configure({ Auth: awsAuthConfig });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ProvideAuth>
      <ThemeProvider theme={systemTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ProvideAuth>
  </React.StrictMode>,
);
