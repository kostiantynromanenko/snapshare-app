import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import { ThemeProvider } from '@emotion/react';
import { ProvideAuth } from '@features/auth/useAuth';
import App from './App';
import { awsAuthConfig } from './config/auth';
import { defaultTheme, GlobalStyles } from './theming';

Amplify.configure({ Auth: awsAuthConfig });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ProvideAuth>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ProvideAuth>
  </React.StrictMode>,
);
