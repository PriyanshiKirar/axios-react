import React from 'react'
import { useEffect } from 'react'
const Home = () => {
useEffect(()=>{
  console.log("mounted");
  return () => {
    console.log("unmounted")
  }
},[])
  return (
    <div>homw</div>
  )
}

export default Home