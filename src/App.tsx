import React from 'react';
import Acessibillity from './components/acessibillity/acessibillity';
import Footer from './components/footer/footer';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/home.page';
import SobrePage from './pages/sobre.page';

function App() {
  return (
    <div className="App">
      <Acessibillity />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
      </Routes>   
      <Footer />
    </div>  
  );
}

export default App;
