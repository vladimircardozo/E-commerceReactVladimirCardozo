import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

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
        <div className="card mb-3 rounded-0 shadow small-card" >
          <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text"><b>Descripción del producto:</b> {producto.descripcion}</p>
            <p className="card-text">
               Precio: ${producto.precio}
            </p>
          </div>
        </div>
      ) : (
        <p>Cargando o producto no encontrado...</p>
      )}
    </Container>
  );
};

export default ItemDetailContainer;
