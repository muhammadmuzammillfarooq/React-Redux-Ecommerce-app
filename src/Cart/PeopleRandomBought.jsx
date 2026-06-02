import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PeopleRandomBought = () => {

     const products = useSelector((store)=>store.productSlice.products)
      
  const randomIndex = Math.floor(Math.random()*products.length)
  const product = products[randomIndex]
  

  return (
    <>
    
     <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <a href="#" className="overflow-hidden rounded">
                <img className="mx-auto h-44 w-44 dark:hidden" src={product.image} alt="imac image" />
               
              </a>
              <div>
                <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{product.title}</a>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">{product.description.substring(0,50)}</p>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  <span className="line-through"> Rs; {product && Math.ceil(product.price * 1.3)} </span>
                </p>
                <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">Rs; {product && Math.ceil(product.price )}</p>
              </div>

              <div className="mt-6 flex items-center gap-2.5">
              

                <Link to= {'/product/'+product.id}  type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                  </svg>
                  Add to cart
                </Link>
                
              </div>
            </div>






              

    </>
  )
}

export default PeopleRandomBought
