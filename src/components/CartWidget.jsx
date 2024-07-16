import React, { useState, useEffect } from 'react';

export const CartWidget = () => {
  const [cantidadArticulos, setCantidadArticulos] = useState(0);

  useEffect(() => {
    const obtenerCantidadArticulos = async () => {
      const cantidad = 9;
      setCantidadArticulos(cantidad);
    };

    obtenerCantidadArticulos();
  }, []);

  return (
    <div className="cart-widget">
      <a href="" className="nav-link">
        <i className="bi bi-cart3"></i>
        {cantidadArticulos > 0 && (
          <span className="item-count">{cantidadArticulos}</span>
        )}
      </a>
    </div>
  );
};
