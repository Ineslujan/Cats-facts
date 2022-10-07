import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Breeds from './components/Breeds/Breeds';
import Facts from './components/Facts/Facts';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/facts" element={<Facts />} />
      </Routes>
    </div>
  );
}

export default App;
