import React from 'react'
import Nike from "../../images/Nike.jpg";

const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;  

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <div className="menu" onClick={toggleMenu}>
        <box-icon name="menu"></box-icon>
      </div>
      <a href='#'>
        <div className="logo">
          <img src={Nike} alt="logo" width="150" />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
      </ul>
      <div className="cart" onClick={toggleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total">{carrito.length}</span> 
      </div>
    </header>
  );
};

export default Header;