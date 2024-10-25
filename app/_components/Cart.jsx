import React, { useContext, useEffect } from 'react';
import { CartContext } from '../_context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);

    useEffect(() => {
        console.log('current cart', cart);
    }, [cart]);

    useEffect(()=>{
      localStorage.setItem('cart', JSON.stringify(cart));
    
    },[cart])

    return cart.length > 0 ? (
        <div className='h-[300px] w-[250px] bg-gray-400 z-10 rounded-md border shadow-sm absolute mx-10 right-10 p-5 top-12 overflow-auto'>
            <div className="mt-4 space-y-6">
                <ul className="space-y-4">
                    {cart.map((item, index) => (
                        <li key={index} className="flex items-center gap-4">
                            <img
                                src={item?.attributes?.banner?.data[0]?.attributes?.url}
                                alt={''}
                                className="size-16 rounded object-cover"
                            />
                            <div>
                                <h3 className="text-sm text-gray-900">{item?.attributes?.title}</h3>
                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                        <dt className="inline">{item?.attributes?.category}</dt>
                                    </div>
                                    <div>
                                        <dt className="inline">{item?.attributes?.pricing}</dt>
                                    </div>
                                    <div>
                                        <dt className="inline">Quantity: {item?.quantity}</dt> {/* Display quantity */}
                                    </div>
                                </dl>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="space-y-4 text-center mt-5">
                    <a
                        href="#"
                        className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                    >
                        View my cart ({cart.length})
                    </a>
                    <a
                        href="#"
                        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                    >
                        Continue shopping
                    </a>
                </div>
            </div>
        </div>
    ) : null; // Show nothing if the cart is empty
};

export default Cart;
