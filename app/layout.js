'use client'
// app/layout.js
import { ClerkProvider } from '@clerk/nextjs';
import { CartProvider } from './_context/CartContext';
import Header from './_components/Header';
import Footer from './_components/Footer';
import './globals.css';

import { useEffect ,useState} from 'react';

export default function RootLayout({ children }) {
  const [cart,setCart] = useState([])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]); 
    return (
        <ClerkProvider>
            <CartProvider value={{cart,setCart}}>
                <html lang="en">
                    <body>
                        <Header />
                        {children}
                        <Footer />
                    </body>
                </html>
            </CartProvider>
        </ClerkProvider>
    );
}
