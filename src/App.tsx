import React from 'react';
import Acessibillity from './components/acessibillity/acessibillity';
import Footer from './components/footer/footer';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/home.page';
import SobrePage from './pages/sobre.page';
import ContatoPage from './pages/contato.page';

function App() {
  return (
    <div className="App">
      <Acessibillity />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContatoPage/>} />
      </Routes>   
      <Footer />
    </div>  
  );
}

export default App;
