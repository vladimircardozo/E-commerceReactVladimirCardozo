import React, { useState } from 'react';
import './css/style.css';

export const ItemQuantitySelector = ({ stock, onAdd }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        if (quantity < stock) {
            setQuantity((prev) => prev + 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleAddToCart = () => {
        if (onAdd) {
            onAdd(quantity);
        }
    };

    return (
        <div className='d-flex justify-content-between'>
            <div>
            <button onClick={handleDecrease} disabled={quantity <= 1} className='quantifyDecoracion border border-0 px-2 m-1  rounded-circle fs-3'>-</button>
            <span className='fs-3'>{quantity}</span>
            <button onClick={handleIncrease} disabled={quantity >= stock} className='quantifyDecoracion border border-0 px-2 m-1  rounded-circle fs-3'>+</button>
            </div>
            <button onClick={handleAddToCart} className="btn btn-primary border-0">Agregar al carrito</button>
        </div>
    );
};
