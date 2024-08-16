import React from 'react';
import logo from '../assets/img/logo.png';
import './css/style.css';

export const Footer = () => {
  return (
    <div className="container border-top">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-3">
        <div className="col-md-4 d-flex justify-content-center align-items-center text-center">
          <a
            href="#"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <img className="logo" src={logo} alt="logo de la pagina" />
          </a>
          <span className="mb-3 mb-md-0 text-muted">
            &copy; 2024 Gorilla Suplementos, Inc
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a class="text-muted" href="">
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a class="text-muted" href="">
              <i class="bi bi-twitter-x"></i>
            </a>
          </li>
          <li className="ms-3">
            <a class="text-muted" href="">
              <i class="bi bi-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
