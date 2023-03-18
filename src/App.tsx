import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from '@features/sign-in';
import { Home } from '@features/home';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<SignIn />} />
      <Route path="*" element={<p>Page Not Found</p>} />
    </Routes>
  </BrowserRouter>
);

export default App;
