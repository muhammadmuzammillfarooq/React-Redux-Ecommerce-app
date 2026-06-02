import React from 'react'
import { Link } from 'react-router'
import { FaAmazon } from "react-icons/fa";
const Logo = () => {
  return (
    <>
    <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <FaAmazon className='text-4xl text-indigo-700 ' />
      <span className="ml-3 text-xl">Recommerce</span>
    </Link>
      
    </>
  )
}

export default Logo
