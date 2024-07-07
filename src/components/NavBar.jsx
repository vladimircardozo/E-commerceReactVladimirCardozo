import React from 'react';
import './css/bootstrap.min.css';
import './bootstrap.bundle.min.js';
import './css/navbar.css';

const Navbar = () => {
  return (
    <nav className='container navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <p className='navbar-brand'>LOGO</p>
        </div>
        
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'><a className='nav-link' href="">Inicio</a></li>
          <li className='nav-item'><a className='nav-link' href="">Productos</a></li>
          <li className='nav-item'><a className='nav-link' href="">Nosotros</a></li>
        </ul>
        
        <div className='carrito-icono'>
        <a href="" className='nav-link'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
        </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;