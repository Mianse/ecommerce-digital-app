
import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({productList}) => {
  return (
    <div className='lg:gap-16  mx-auto max-w-screen-xl px-4 py-8 sm:px-10 sm:py-20 lg:px-8 lg:py-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
     {productList.map((item,index)=>(
        <div key={index}>
          <ProductItem product={item}/>
        </div>
      ))}
    </div>
  )
}

export default ProductList
