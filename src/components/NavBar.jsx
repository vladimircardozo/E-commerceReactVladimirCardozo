import React from 'react';
import './css/style.css';
import { CartWidget } from './CartWidget';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="container container-fluid navbar navbar-expand-lg mt-3 border rounded shadow-sm">
      <div className="container-fluid">
        <div className="navbar-header">
          <img src={logo} alt="logo de la pagina" className="logo" />
        </div>


        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link hvr-underline-from-center" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link hvr-underline-from-center" to="/nosotros">
            Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link hvr-underline-from-center" to="/categoria/suplementos">
            Suplementos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link hvr-underline-from-center" to="/categoria/adicionales">
            Adicionales
            </Link>
          </li>
        </ul>

        <div className="carrito-icono">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};


