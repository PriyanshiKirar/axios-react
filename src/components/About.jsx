import React from 'react'
import { useState } from 'react';
import axios from '../utils/axios'; // Corrected import with quotes

const About = () => {
  const [products,setproducts]=useState(null);
  const getProducts = async () => {
    try {
      // const  data  = await axios.get("https://fakestoreapi.com/products");
      const {data} =await axios.get("/products");
      console.log(data);
      setproducts(data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <button className='border border-zinc-800 py-2 px-3 bg-blue-200  rounded-md mt-3' onClick={getProducts}>Products</button>
    </>

  )
}

export default About