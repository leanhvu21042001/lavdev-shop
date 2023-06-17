import React from 'react';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';

export const RoutesCustom = () => {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dang-ky" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export const BrowserRouterCustom = () => {
  return (
    <BrowserRouter>
      <RoutesCustom />
    </BrowserRouter>
  );
};
