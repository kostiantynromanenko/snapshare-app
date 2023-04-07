import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Landing } from '@pages';
import { Gallery } from '@features/gallery';

const App = (): JSX.Element => (
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

export default App;
