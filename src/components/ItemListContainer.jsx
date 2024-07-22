import React, { useState, useEffect } from 'react';
import './css/navbar.css';
import ItemList from './ItemList';

export const ItemListContainer = ({greeting}) => {
  const [items,setItems] = useState([]);

  useEffect(() => {
    const fetchItems =  () => {

      new Promise((resolve, reject) => {
        setTimeout(() => {
          fetch("../public/productos.json")
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
        }, 2000)
      })
      .then(data => {
        setItems(data);
      })
      .catch (error => {
        console.error("Error al obtener los productos:", error)
      }) 
    }

    fetchItems();
  }, []);
  

  return (
    <div className="container mt-4">
      <h1 className='my-2'>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
