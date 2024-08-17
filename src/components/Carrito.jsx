import React, { useContext, useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { ItemsContext } from '../contexts/ItemsContext';
import Checkout from './Checkout';

const initialValues = {
  name: '',
  email: '',
  phone: '',
};

const Carrito = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { cartItems, removeItem, clear } = useContext(ItemsContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (ev) => {
    setBuyer((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleOrder = () => {
    const order = {
      buyer,
      items: cartItems,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, 'orders');

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert('Su orden: ' + id + ' ha sido completada!');
        clear();
        setBuyer(initialValues);
      }
    });
  };

  return (
    <div className="container mt-4">
      <h1 className="my-4">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>No hay artículos en el carrito.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <h5 className="my-0">{item.title}</h5>
                  <small className="text-muted">
                    Cantidad: {item.quantity}
                  </small>
                </div>
                <span className="text-muted">
                  ${item.price * item.quantity}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="btn btn-danger btn-sm border-0"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button onClick={clear} className="btn btn-secondary mt-2">
            Vaciar Carrito
          </button>
        </div>
      )}
      <hr />
      {!!cartItems.length && (
        <Checkout
          buyer={buyer}
          handleChange={handleChange}
          handleOrder={handleOrder}
        />
      )}
    </div>
  );
};

export default Carrito;
