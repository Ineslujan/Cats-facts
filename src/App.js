import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/3-Organisms/Home/Home';
import Breeds from './components/3-Organisms/Breeds/Breeds';
import Facts from './components/3-Organisms/Facts/Facts';
import Header from './components/3-Organisms/Header/Header';
import Footer from './components/3-Organisms/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
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
