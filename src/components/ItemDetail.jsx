
const ItemDetail = ({producto}) => {
    return (
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
    )
}

export default ItemDetail