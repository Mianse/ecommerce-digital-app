import GlobalApi from '@/app/_utils/GlobalApi';
import { AlertOctagon, Badge, BadgeCheck, ShoppingCart } from 'lucide-react';
import React, { useEffect } from 'react';
import SkeletonProductInfo from './SkeletonProductInfo';

const ProjectDetail = ({product}) => {
  
  return (
    <div>
      {product ?
      <div>
      <h2 className="text-[20px] text-gray-400">{product?.attributes?.title}</h2>
      <h2 className="text-[12px] text-gray-700">{product?.attributes?.category}</h2>
      <h2 className="text-[12px] text-gray-600">{product?.attributes?.description}</h2>
      <h2 className="flex gap-2 mt-5 text-gray-500">
      {product?.attributes?.instantDelivery?
      <BadgeCheck className='text-green-500' size={16} />:<AlertOctagon className="text-yellow-500"/>}
      Eligible for instant Delivery</h2>
 
      <h2 className="text-[35px] mt-5 text-primary font-medium"> $ {product?.attributes?.pricing}</h2>
    <button className="flex gap-2 p-4 bg-primary hover:bg-blue-900 text-white rounded-lg mt-5 px-10">
        <ShoppingCart/>
        Add to Cart</button>

    </div>:

    <SkeletonProductInfo/>
    }
    
    </div>
    
  );
}
 
export default ProjectDetail;
