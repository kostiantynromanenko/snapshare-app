import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Landing } from '@pages';
import { Gallery } from '@features/gallery';

const App = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    document.title = t('title');
  }, [lang, t]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/gallery" replace />} />
      <Route path="gallery" element={<Home />}>
        <Route index element={<Gallery />} />
        <Route path="sharing" element={<div>Items are being shared with others</div>} />
      </Route>
      <Route path="login" element={<Landing />} />
      <Route path="*" element={<p>Page Not Found</p>} />
    </Routes>
  );
};

export default App;
