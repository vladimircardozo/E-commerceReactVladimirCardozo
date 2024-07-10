import React from 'react';
import './css/navbar.css';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <nav className="container navbar navbar-expand-lg mt-3 border border-2 rounded">
      <div className="container-fluid">
        <div className="navbar-header">
          <p className="navbar-brand text-center m-0">LOGO</p>
        </div>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
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
