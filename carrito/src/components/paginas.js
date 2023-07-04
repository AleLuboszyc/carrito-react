import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from "./Inicio/Inicio";
import Productos from './Productos/Productos';

const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </section>
  );
}

export default Paginas;