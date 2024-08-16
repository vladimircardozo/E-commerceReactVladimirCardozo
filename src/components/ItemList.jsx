import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item 
          key={item.id} 
          id={item.id} 
          nombre={item.title} 
          precio={item.price} 
          imagen={item.image}
        />
      ))}
    </div>
  );
};

export default ItemList;