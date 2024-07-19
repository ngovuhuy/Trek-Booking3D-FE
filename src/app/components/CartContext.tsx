"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTotalCartItems } from '../services/bookingCartService';

interface CartContextProps {
  totalItems: number;
  fetchTotalItems: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [totalItems, setTotalItems] = useState(0);

  const fetchTotalItems = async () => {
    const total = await getTotalCartItems();
    setTotalItems(total);
  };

  useEffect(() => {
    fetchTotalItems();
  }, []);

  return (
    <CartContext.Provider value={{ totalItems, fetchTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
