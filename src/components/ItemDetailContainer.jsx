import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";

import data from "../data/productos.json";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    });

    fetchData.then((response) => {
      const item = response.find((i) => i.id_producto === Number(id));
      setProducto(item);
    });
  }, [id]);

  return (
    <Container>
      <h1>Detalles</h1>
      {producto ? (
        <ItemDetail producto={producto}/>
      ) : (
        <p>Cargando o producto no encontrado...</p>
      )}
    </Container>
  );
};

export default ItemDetailContainer;
