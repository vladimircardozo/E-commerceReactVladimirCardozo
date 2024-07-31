import React, { useState, useEffect } from 'react';
import './css/navbar.css';
import ItemList from './ItemList';

import products from "../data/productos.json";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);


  useEffect(() => {
    const fetchItems = () => {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      })
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener los productos:", error);
        setLoading(false)
      });
    }

    fetchItems();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className='my-2'>{greeting}</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (<ItemList items={items} />)}
    </div>
  );
};

export default ItemListContainer;

