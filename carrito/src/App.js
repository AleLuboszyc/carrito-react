import React from 'react';
import Header from './components/Header/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Paginas from "./components/Paginas";
import Productos from "./components/Productos/Productos.jsx"; 
import { Dataprovider } from './components/context/Dataprovider.js';
import "boxicons";
import CartShop from "./components/CartShop/CartShop.jsx";

function App() {
  return (
    <Dataprovider>
    <div className="App">
      <BrowserRouter>
        <Header />
        <CartShop />
        <Routes>
          <Route path="/" element={<Paginas />} />
          <Route path="/productos" element={<Productos />} /> 
        </Routes>
      </BrowserRouter>
    </div>
    </Dataprovider>
  );
}

export default App;