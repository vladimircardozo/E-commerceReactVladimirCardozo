import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className="row">
      {items.map((item) => (
        <div className='col-md-4 mb-4' key={item.id_producto}>
          <Item
            id_producto={item.id_producto}
            nombre={item.nombre}
            precio={item.precio}
            imagen={item.imagen}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
