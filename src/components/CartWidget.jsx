import React, { useState, useEffect } from 'react';

export const CartWidget = () => {
  const [itemCount, setItemCount] = useState(0); 

  useEffect(() => {
    const fetchCartItemCount = async () => {
      const count = 9;
      setItemCount(count);
    };

    fetchCartItemCount();
  }, []);

  return ( 
    <div className="cart-widget">
    <a href="" className="nav-link">
      <i className="bi bi-cart3"></i>
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </a>
  </div>
  );
};
