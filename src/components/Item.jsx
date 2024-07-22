import React from 'react';
import './css/navbar.css';

const Item = ({ id_producto, nombre, precio, imagen }) => {
  return (
    <div className="">
      <div className="card rounded-0 shadow" key={id_producto}>
        <img src={imagen} className="card-img-top imgProduct" alt={nombre} />
        <div className="card-body">
          <h3 className="card-title">{nombre}</h3>
          <div className="d-flex justify-content-between align-items-center">
            <p className="fs-3 fw-bold m-0 text-center">${precio}</p>
            <a href="#" className="btn">
              Agregar al carrito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
