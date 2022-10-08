import React from 'react'
import Agocharfeature from '../components/Agocharfeature'
import Features from '../components/Features'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Newsletter from '../Newsletter'
import Footer from '../components/Footer';
import axios from "axios";
import { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
const Home = () => {
  // const [products2,setProducts] = useState([]);
  // const [filteredProducts,setFilteredProducts] = useState([]);

  // useEffect(()=>{
  //   const getProducts = async()=>{
  //     try{
  //       const res = await axios.get( `http://localhost:5000/api/products`)
        
  //       setProducts(res.data);
  //       console.log(res);
        
  //     }catch(err){
  //       console.log(err);
  //     }
  //   }
  //   getProducts();
  // },[]);
  // const location = useLocation();
  // const id = location.pathname.split("/")[2]
  // const [products,setProducts] = useState({});
  
  // 62d842d29d3cbb7a03b85b9e
    
    // useEffect(()=>{
    //   const getProducts = async()=>{
    //     try{
    //       const res = await axios.get( `http://localhost:5000/api/products/find/`+id)
          
    //       setProducts(res.data);
    //       console.log(res);
          
    //     }catch(err){
    //       console.log(err);
    //     }
    //   }
    //   getProducts();
    // },[id]);
  return (
    <div>
        <Navbar />
        <Slider />
        {/* {products.map((item) => (
        <Agocharfeature item ={item} key={item.id} />
    ))} */}
    <Agocharfeature/>
        <Features />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home