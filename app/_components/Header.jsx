"use client"
import { UserButton, useUser } from '@clerk/clerk-react'
import {ShoppingBag, ShoppingCart} from 'lucide-react'
import { useEffect, useState ,useContext} from 'react'
import Image from 'next/image'
import React from 'react'
import Cart from  './Cart'
import GlobalApi from '../_utils/GlobalApi'
import { CartContext } from '../_context/CartContext'

const Header = () => {
 const {user} =useUser();
 const [isLogin,setIsLogin] = useState()
 const [openCart, setOpenCart] = useState(false)
 const {cart, setCart}=useContext(CartContext)
  
 useEffect(()=>{
  setIsLogin(window.location.href.toString().includes('sign-up'))

  setIsLogin(window.location.href.toString().includes('sign-in'))
 })
 
 useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);


useEffect(()=>{
  openCart==false&&setOpenCart(true)
 },[cart])
 
 
 useEffect(() => {
  if (user) {
    getUserCartItem();
  }
}, [user]);

const getUserCartItem=()=>{
  GlobalApi.getUserCartItems(user.primaryEmailAddress.emailAddress).then(resp=>{
    const result = resp.data.data
    if (result) {
      const newItems = result.flatMap(prd => prd?.attributes?.products?.data || []);
      console.log('Fetched new items:', newItems);
      setCart((prevCart) => {
        const existingIds = new Set(prevCart.map(item => item.id));
        const filteredNewItems = newItems.filter(item => !existingIds.has(item.id));
        console.log('Filtered new items:', filteredNewItems);
        return [...prevCart, ...filteredNewItems];
      });
    }
    })
}
 




  return !isLogin&&(
    <div>
      <header className="bg-white">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Image src='/logo1.svg' alt='logo' href="/" width={90} height={40}/>

    <div className="flex flex-1 items-center justify-end md:justify-between">
    <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#">  </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="/products">  </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#">  </a>
          </li>

        </ul>
      </nav>

      <div className="flex items-center gap-4">
        {!user?
        <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary"
            href="/sign-in"
          >
            Login
          </a>

          <a
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primary sm:block"
            href="/sign-up"
          >
            Register
          </a>
        </div>:
        <div className='flex color-black items-center gap-4 '>
         <h2 className='flex gap-1 cursor-pointer text-green-700' onClick={()=>setOpenCart(!openCart)}> <ShoppingCart  className="w-6 h-6 text-blue-700"/>({cart?.length})</h2>
         <UserButton/>
          {openCart&&<Cart/>}
        </div>
        }

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Header