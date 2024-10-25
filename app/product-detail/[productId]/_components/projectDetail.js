"use client";

import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react';
import React, { useContext } from 'react';
import SkeletonProductInfo from './SkeletonProductInfo';
import { useUser } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import GlobalApi from '../../../_utils/GlobalApi';
import { CartContext } from '../../../_context/CartContext';
import { useEffect } from 'react';

const ProjectDetail = ({ product }) => {
  const { user } = useUser();
    const router = useRouter();
    const { cart,setCart } = useContext(CartContext);

    if (!cart || !setCart) {
      console.error("Cart context is not available");
      return null; // or some fallback UI
  }
    const onAddToCartClick = () => {
        if (!user) {
            router.push('/sign-in');
            return;
        }

        const data = {
            data: {
                userName: user.fullName,
                email: user.primaryEmailAddress.emailAddress,
                products: product?.id,
            },
        };

       GlobalApi.addToCart(data).then(resp => {
            console.log('add to cart', resp, product);
            setCart(prevCart => [...prevCart, product]);
        }).catch(error => {
            console.error('error', error);
        });
    };
    
    return (
        <div>
            {product ? (
                <div>
                    <h2 className="text-[20px] text-gray-400">{product?.attributes?.title}</h2>
                    <h2 className="text-[12px] text-gray-700">{product?.attributes?.category}</h2>
                    <h2 className="text-[12px] text-gray-600">{product?.attributes?.description}</h2>
                    <h2 className="flex gap-2 mt-5 text-gray-500">
                        {product?.attributes?.instantDelivery ? (
                            <BadgeCheck className='text-green-500' size={16} />
                        ) : (
                            <AlertOctagon className="text-yellow-500" />
                        )}
                        Eligible for instant Delivery
                    </h2>
                    <h2 className="text-[35px] mt-5 text-primary font-medium">${product?.attributes?.pricing}</h2>
                    <button className="flex gap-2 p-4 bg-primary hover:bg-blue-900 text-white rounded-lg mt-5 px-10" onClick={onAddToCartClick}>
                        <ShoppingCart />
                        Add to Cart
                    </button>
                </div>
            ) : (
                <SkeletonProductInfo />
            )}
        </div>
    );
};

export default ProjectDetail;
