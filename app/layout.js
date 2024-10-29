'use client'
// app/layout.js
import { ClerkProvider } from '@clerk/nextjs';
import { CartProvider } from './_context/CartContext';
import Header from './_components/Header';
import Footer from './_components/Footer';
import Cart from './_components/Cart';
import './globals.css';


export default function RootLayout({ children }) {
   
    return (
        <ClerkProvider>
            <CartProvider>
                <html lang="en">
                    <body>
                       
                        <Header />
                        {children}
                        <Cart/>
                        <Footer />
                    </body>
                </html>
            </CartProvider>
        </ClerkProvider>
    );
}
