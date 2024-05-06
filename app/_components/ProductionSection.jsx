"use client"
import React from 'react'
import {useEffect} from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'

const ProductionSection = () => {
  useEffect(()=>{
  getLatestProducts_();
},[])
  
const getLatestProducts_=()=>{
    GlobalApi.getLatestProducts().then(resp=>{
      console.log(resp.data)
    })
  }
  return (
    <div>
     <ProductList/>
    </div>
  )
}

export default ProductionSection
