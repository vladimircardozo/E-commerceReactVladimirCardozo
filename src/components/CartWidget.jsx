import React, { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  const { cartItems } = useContext(ItemsContext);

  const cantidadArticulos = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <div className="cart-widget">
      <Link to="/carrito" className="nav-link">
        <i className="bi bi-cart3"></i>
        {cantidadArticulos > 0 && (
          <span className="item-count">{cantidadArticulos}</span>
        )}
      </Link>
    </div>
  );
};