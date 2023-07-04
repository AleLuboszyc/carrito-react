import React from 'react';
import Header from './components/Header/Header.jsx';
import Productos from "./components/Productos/Productos.jsx"
import './index.css';
import 'boxicons';

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