import React, { createContext, useEffect, useState } from 'react';

export const ItemsContext = createContext();

export const Provider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (item, quantity) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(
        (p) => p.id === item.id
      );
      if (itemExists) {
        return prevItems.map((p) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + quantity }
            : p
        );
      } else {
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  const removeItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  const clear = () => {
    setCartItems([]);
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <ItemsContext.Provider
      value={{ cartItems, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
