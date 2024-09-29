"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { useEffect,useState } from 'react'
import Breadcrumb from '@/app/_components/Breadcrumb'
import ProjectBanner from './_components/projectBanner'
import ProjectDetail from './_components/projectDetail'
import ProductList from '@/app/_components/ProductList.jsx'
import { usePathname } from 'next/navigation'
const productDetails = ({params}) => {
  //use to get url path

  const path = usePathname() 
    const [productDetail, setProductDetail] = useState('')
    const [productList,setProductList]= useState([])

    useEffect(()=>{
        console.log("project path",path)
        
        getProductById_()     
    },[])



    const getProductById_=()=>{
        
        GlobalApi.getProductById(params?.productId).then(resp=>{
            console.log(resp.data.data)
            setProductDetail(resp.data.data)
            getProductListByCategory(resp.data.data);
        })
    }
    const getProductListByCategory=(product)=>{
      GlobalApi.getProductByCategory(product?.attributes?.category).then(
        resp=>{
          setProductList(resp.data.data)
        }
      )
    }
  return (
    <div className='p-5 py-13 px-10 md:px-28'>
      <Breadcrumb path={path} />
      <div className='grid grid-col-1 mt-5 sm:grid grid-cols-2 justify-around gap-5'>
      <ProjectBanner product={productDetail} className=''/>
      <ProjectDetail product={productDetail}/>
      </div>
    
      {productList && <div className='mt-2'>
        <h2>Similar products</h2>
        <ProductList productList={productList}/>

        </div>}

      
    </div>
  )
}

export default productDetails
