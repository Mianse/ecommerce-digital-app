import React, { useContext } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useUser } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import { ChevronRightSquare } from 'lucide-react';
import GlobalApi from '../_utils/GlobalApi';
import { CartContext } from '../_context/CartContext';
const ProductItem = ({product}) => {
  const { user } = useUser();
 // const {setCart} = useState([])
  const bannerData = product?.attributes?.banner?.data;
  
  // Check if bannerData is an array and has at least one item
  if (!Array.isArray(bannerData) || bannerData.length === 0) {
    // Handle the case where banner data is missing or empty
    return <div>No image available</div>;
  }

  // Access the first item in the banner data array
  const src = bannerData[0]?.attributes?.url;

  // Check if src is available, otherwise handle the case
  if (!src) {
    // Handle the case where src is missing
    return <div>No image available</div>;
  }
  
    const data = {
        data: {
            userName: user?.fullName,
            email: user?.primaryEmailAddress.emailAddress,
            products: product?.id,
        },
    };

    GlobalApi.addToCart(data).then(resp => {
        console.log('add to cart', resp, product);
        setCart(prevCart => [...prevCart, product]);
    }).catch(error => {
        console.error('error', error);
    });


  return (
  <Link href={'/product-detail/'+product.id}>
      <div className='hover:border p-1 rounded-lg border-blue-300'>
        <Image src={src} alt='banner' height={400} width={350} className='rounded-t-lg h-[350px] object-cover'/>
        <div className='flex justify-between items-center bg-gray-400 p-3 rounded-b-lg'>
          <div className=''>
          <h2 className='text-[14px] font-medium line-clamp-2'>{product?.attributes?.title}</h2>
          {product?.attributes?.category&&<h2 className='text-[12px] text-gray-400 flex gap-2'>
          <ChevronRightSquare className='w-4 h-4'/>
          {product?.attributes?.category}</h2>}
          </div>

          <h2 className='font-bold'>$ {product?.attributes?.pricing}</h2>
          

      </div>
      </div>
      
      
    </Link>
  )
}

export default ProductItem
