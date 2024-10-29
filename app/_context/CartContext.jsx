// _context/CartContext.js
'use client'
import React, { createContext, useState, useEffect } from 'react';
import { useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Load initial state from local storage
        if (typeof window !== 'undefined') {
          const savedCart = localStorage.getItem('cart');
          return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
      });
    
      useEffect(() => {
        // Save cart to local storage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const appCartContext =()=>useContext(CartContext)
