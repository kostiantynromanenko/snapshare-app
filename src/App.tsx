import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '@features/home';
import { SignIn } from '@features/sign-in';

const App = (): JSX.Element => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="login" element={<SignIn />} />
    <Route path="*" element={<p>Page Not Found</p>} />
  </Routes>
);

export default App;
