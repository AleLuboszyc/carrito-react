import React from 'react';
import Header from './components/Header/Header.jsx';
import Productos from "./components/Productos/Productos.jsx"
import './index.css';
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Header />
      <Productos />
    </div>
  );
}

export default App;
