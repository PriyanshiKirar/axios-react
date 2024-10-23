import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from './utils/axios'; // Corrected import with quotes
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
const App = () => {
  const [products,setproducts]=useState(null);
  // const getProducts = async () => {
  //   try {
  //     // const  data  = await axios.get("https://fakestoreapi.com/products");
  //     const {data} =await axios.get("/products");
  //     console.log(data);
  //     setproducts(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(()=>{
    console.log("appjs.is mounted");
     return () =>{
      console.log("app.js is not mouted")
     };
  },[]);
  return (
    <>
      <div className="w-[80%] mt-10 bg-pink-200 mx-auto mb-4 p-10">
        <nav className="flex gap-x-5">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
        {/* <button className='border border-zinc-800 py-2 px-3 bg-blue-200  rounded-md mt-3' onClick={getProducts}>Products</button> */}
      </div>
    </>
  );
};
export default App;
