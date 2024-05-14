"use client"
import React from 'react'
import {useEffect,useState} from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'

const ProductionSection = () => {
  const [productList,setProductList] = useState([])

  useEffect(()=>{
  getLatestProducts_();
},[])
  
const getLatestProducts_=()=>{
    GlobalApi.getLatestProducts().then(resp=>{
      console.log(resp.data.data)
      setProductList(resp.data.data)
    })
  }
  return productList&& (
    <div className=' px-10 md:px-20'>
      <h2 className='font-medium text-[20px] my-3'>  Brand New</h2>
      <ProductList productList={productList}/>

      <h2 className='font-medium text-[20px] mx-3'>  Latest New</h2>
      <ProductList productList={productList}/>
      <h2 className='font-medium text-[20px] mx-3'>  Demanded</h2>
      <ProductList productList={productList}/>
    </div>
  )
}

export default ProductionSection
