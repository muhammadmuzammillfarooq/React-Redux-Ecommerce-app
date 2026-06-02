import React from 'react'
import Herosection from '../commponents/Home/Herosection'
import ProductCard from '../commponents/Home/ProductCard'
import{ useSelector } from "react-redux";
import axios from "axios";



const Home = () => {


     const products =useSelector((state) => state.productSlice.products)
      
  return (
    <div>
      
      <Herosection/>

     <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col  w-full mb-20">
      <h1 className="text-2xl xl:text-3xl font-medium title-font mb-4 text-gray-900">PRODUCT</h1>
      
    </div>
    <div className="flex flex-wrap -m-4">  
   {
     products && products.length>0 && products.map((cur,i)=> {
      return <ProductCard key={i} data={cur}/>
    })
   }
   
    </div>
  </div>
</section>

      
    </div>
  )
}

export default Home
