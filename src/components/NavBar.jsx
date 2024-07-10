import React from 'react';
import './css/navbar.css';
import { CartWidget } from './CartWidget';
import logo from "../assets/img/logo.jpg";

export const NavBar = () => {
  return (
    <nav className="container navbar navbar-expand-lg mt-3 border border-2 rounded">
      <div className="container-fluid">
        <div className="navbar-header">
          <img src={logo} alt="logo de la pagina" className='logo' />
        </div>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link hvr-underline-from-center" href="">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link hvr-underline-from-center" href="">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link hvr-underline-from-center" href="">
              Nosotros
            </a>
          </li>
        </ul>

        <div className="carrito-icono">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
