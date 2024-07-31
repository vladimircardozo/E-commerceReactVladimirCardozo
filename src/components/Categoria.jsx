import { Link, useParams } from "react-router-dom";

import productos from "../data/productos.json"
import { useEffect, useState } from "react";

export const Categoria = () => { 
    const {categoriaId} = useParams()
    const [productosFiltrados, setProductosFiltrados] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchProductos = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const productosFiltrados = productos.filter(producto => producto.categoria === categoriaId);
            resolve(productosFiltrados)
          }, 2000)
        });
      };

      fetchProductos()
        .then(filtrados => {
          setProductosFiltrados(filtrados)
          setLoading(false)
        })
        .catch(error => {
          console.error("Error al obtener los productos:", error);
          setLoading(false);
      });
    }, [categoriaId]);

    return (
      <div className="container">
      <h1 className="mt-3 mb-3">Productos en la categoría: {categoriaId}</h1>
      <div className="row">
        { loading ? (<p>Cargando...</p>) : productosFiltrados.length > 0 ? (
          productosFiltrados.map(producto => (
            <div key={producto.id_producto} className="col-md-4 mb-4">
              <div className="card rounded-0 shadow">
                <img src={producto.imagen} className="card-img-top imgProduct" alt={producto.nombre} />
                <div className="card-body">
                  <h3 className="card-title">{producto.nombre}</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fs-3 fw-bold m-0 text-center">${producto.precio}</p>
                    <Link to={`/detail/${producto.id_producto}`}>
                      <a href="#" className="btn btn-primary border-0">
                        Ver detalles
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
    )
}