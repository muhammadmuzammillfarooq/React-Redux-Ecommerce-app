import React from 'react'
import { Link } from 'react-router'
import { FaAmazon } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

 import Logo from './Logo';
  
const Navbar = () => {
  return (
    <>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   <Logo/>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to={'/'} className="mr-5 hover:text-gray-900">Home</Link>
      <Link to={'/Cart'} className="mr-5 hover:text-gray-900">Cart</Link>
      
    </nav>
    <button className="inline-flex items-center bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 md:mt-0">
       <span> Login</span>
       <CiLogin />
    </button>
  </div>
</header>


    </>
  )
}

export default Navbar
