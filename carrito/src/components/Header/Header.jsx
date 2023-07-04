import React from 'react'
import Nike from "../../images/Nike.jpg";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>
      <Link to='#'>
        <div className="logo">
          <img src={Nike} alt='logo' width="150"/>
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
      <div className='cart'>
        <box-icon name="cart"></box-icon>
        <span className='item__total'>0</span>
      </div>
    </header>
  )
}

export default Header;
