import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

const Item = ({ id_producto, nombre, precio, imagen }) => {
  return (
    <div>
      <div className="card rounded-0 shadow">
        <img src={imagen} className="card-img-top imgProduct" alt={nombre} />
        <div className="card-body">
          <h3 className="card-title">{nombre}</h3>
          <div className="d-flex justify-content-between align-items-center">
            <p className="fs-3 fw-bold m-0 text-center">${precio}</p>
            <Link to={`/detail/${id_producto}`} >
              <a href="#" className="btn btn-primary border border-0">
                Ver detalles
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
