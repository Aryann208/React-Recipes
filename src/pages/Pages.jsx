import React from 'react';
import Home from './Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';
const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes Location={location} key={location.path}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cuisine/:type" element={<Cuisine />}></Route>
        <Route path="/searched/:search" element={<Searched />}></Route>
        <Route path="/recipe/:name" element={<Recipe />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
