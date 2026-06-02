 import React, { useState ,useEffect} from "react";
 import{BrowserRouter, Routes,Route} from "react-router-dom";
 import Home from "./pages/Home";
 import ErrorPage from "./pages/Errorpages";
 import Navbar from "./commponents/Navbar";
  import Footer from "./commponents/footer";
  import SingleProductPage from "./pages/SingleProductPage";

import axios from "axios"; 
import { useDispatch } from "react-redux";
import {addproducts} from "./redux/Products.slice";
import Loader from "./commponents/Loader";
import CartPage from "./pages/CartPage";





 const App = () => {

  const dispatch = useDispatch(); // Assuming you have set up the useDispatch hook from react-redux to dispatch actions to the Redux store.

   const [loading,setLoading] = useState(true);

  const fetchproducts = async () => {
    try {
      const response = await axios.get ("https://fakestoreapi.com/products");     //   // 'https://fakestoreapi.com/products'// 'https://fakestoreapi.com/products' // ('https://fakestoreapi.com/products') is the endpoint for fetching a single product with id 1. You can change the id to fetch different products or use 'https://fakestoreapi.com/products' to fetch all products.
      const data = await  response.data;
      dispatch(addproducts(data)); // Assuming addproduct is the action creator for adding products to the Redux store.
      
    } catch (error) {
      console.error("Error fetching products:", error);
    }finally{
      setLoading(false);
    }
  }

 useEffect(() => {
    fetchproducts();
  }, []);

  if(loading){
    return 
    (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
    
  }

  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<SingleProductPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>


    </>
  );
};

export default App;