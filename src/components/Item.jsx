import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';

const Item = ({ id, nombre, precio, imagen }) => {
  return (
    <div className="card-container">
      <div className="card rounded-0 shadow">
        <img src={imagen} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h3 className="card-title">{nombre}</h3>
          <div className="d-flex justify-content-between align-items-center">
            <p className="fs-3 fw-bold m-0 text-center">${precio}</p>
            <Link to={`/detail/${id}`} className="btn btn-primary border-0">
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
