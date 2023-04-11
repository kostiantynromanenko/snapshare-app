import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import OktaAuth, { toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security } from '@okta/okta-react';
import { useTranslation } from 'react-i18next';
import { Gallery } from '@features/gallery';
import { Loader } from '@features/ui';
import { ProtectedRoute } from '@features/auth';
import { Home, Landing } from '@pages';
import { OKTA_CONFIG } from '@config';

const oktaAuth = new OktaAuth(OKTA_CONFIG);

const App = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language;

  useEffect(() => {
    document.title = t('title');
  }, [lang, t]);

  const restoreOriginalUri = (_oktaAuth: any, originalUri: string): void => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route path="/" element={<Navigate to="/gallery" replace />} />
        <Route path="/gallery" element={<ProtectedRoute element={<Home />} />}>
          <Route index element={<Gallery />} />
          <Route path="sharing" element={<div>Items are being shared with others</div>} />
        </Route>
        <Route path="/login" element={<Landing />} />
        <Route path="/login/callback" element={<LoginCallback loadingElement={<Loader />} />} />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </Security>
  );
};

export default App;
