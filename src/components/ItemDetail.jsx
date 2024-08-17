import React, { useContext, useState } from "react";
import { ItemsContext } from '../contexts/ItemsContext';
import { ItemQuantitySelector } from "./ItemQuantitySelector";

const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(ItemsContext);

  const handleAddToCart = (quantity) => {
    addItem(producto, quantity);
  };

  return (
    <div className="container card my-3 rounded-0 shadow small-card">
      <img src={producto.image} className="card-img-top card-img-top-detail" alt={producto.title} />
      <div className="card-body">
        <h5 className="card-title">{producto.title}</h5>
        <p className="card-text">
          <b>Descripción del producto:</b> {producto.description}
        </p>
        <p className="card-text">Precio: ${producto.price}</p>
        
        <ItemQuantitySelector 
          stock={producto.stock}
          onAdd={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
