import React, { useState, useEffect } from 'react';
import './css/style.css';
import ItemList from './ItemList';
import { getFirestore, getDocs, where, query, collection } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();  // Esto debe coincidir con el nombre del parámetro en la ruta

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const db = getFirestore();
        
        // Realiza la consulta dependiendo de si existe `categoriaId`
        const refCollection = categoriaId 
          ? query(collection(db, "items"), where("categoryId", "==", categoriaId))
          : collection(db, "items");

        const snapshot = await getDocs(refCollection);

        const itemsList = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        setItems(itemsList);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [categoriaId]);

  return (
    <div className="container mt-4">
      <h1 className='my-2'>{greeting}</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;