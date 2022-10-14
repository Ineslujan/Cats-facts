import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../3-Organisms/Home/Home';
import Breeds from '../../3-Organisms/Breeds/Breeds';
import Facts from '../../3-Organisms/Facts/Facts';
import Header from '../../3-Organisms/Header/Header';
import Footer from '../../3-Organisms/Footer/Footer';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/facts" element={<Facts />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
