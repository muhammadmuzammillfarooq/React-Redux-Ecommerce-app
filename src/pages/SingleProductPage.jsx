
import { useParams } from 'react-router-dom';

import axios from "axios"; 

import React, { useState,useEffect } from "react";
import Loader from '../commponents/Loader';
import product from '../redux/Products.slice';

import{addProduct} from '../redux/CartSlice';

import { useDispatch } from 'react-redux';


const SingleProductPage = () => {
   const {id}= useParams();
     
    const [data,setData] = useState({});

    const [loading,setLoading] = useState(true);

    const dispatch = useDispatch();
    

  const fetchproduct = async () => {
    try {
      const response = await axios.get ("https://fakestoreapi.com/products/"+id);     //   // 'https://fakestoreapi.com/products'// 'https://fakestoreapi.com/products' // ('https://fakestoreapi.com/products') is the endpoint for fetching a single product with id 1. You can change the id to fetch different products or use 'https://fakestoreapi.com/products' to fetch all products.
      const data = await response.data;
      setData(data);

    } catch (error) {
      console.error("Error fetching products:", error);
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchproduct();
  }, []);


 if(loading){
  return (
    <div><Loader/></div>
  );
}

  const AddToCart = () => {
  const item = {
    id:data.id,
    title:data.title,
    price:data.price,
    quantity:1,
    image:data.image,

  };

  dispatch(addProduct(item));
  
}


  return (


    <>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img 
            alt= "ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded" 
            src={data.image} 
          />  
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {data.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {data.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-gray-600 ml-3">{data.rating?.count || 0} Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{data.description}</p>
            
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">Rs;{ Math.ceil(data.price*100)}</span>
              <button onClick={AddToCart} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>



  

    </>
  )
}

export default SingleProductPage
