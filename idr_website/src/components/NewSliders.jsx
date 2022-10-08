import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import styled from 'styled-components';
import NewSlider from './NewSlider';
import Product from './Product';
import { mobile8 } from '../responsive';
import { mobile4 } from '../responsive';
const Conatiner = styled.div`
background-color:#1e1e1e;
padding-bottom:50px;
`
const Image = styled.img`

width: 100%;
  height: 100%;
  object-fit: cover;
`
const Heading = styled.h1`
background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
font-weight: 700;
font-size: 60.0775px;

text-align:center;
font-family:'syne';
padding:6%;
${mobile8({fontSize:"40px"})}
${mobile4({fontSize:"30px"})}


`
const NewSliders = () => {
   
    const [products,setProducts] = useState([]);
    // const [filteredProducts,setFilteredProducts] = useState([]);
  
    useEffect(()=>{
      const getProducts = async()=>{
        try{
          const res = await axios.get( `http://localhost:8080/api/images/`)
          
          setProducts(res.data);
          console.log(res);
          
        }catch(err){
          console.log(err);
        }
      }
      getProducts();
    },[]);
  
  
  
  return (
    <Conatiner>
        <Heading>Gallery</Heading>
       <AliceCarousel autoPlay
        
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={3000}
        animationType="slideleft"
        infinite
        mouseTracking={true}
        disableDotsControls
        ArrowLeft={true}
        ArrowRight={true}
        disableButtonsControls
        >
            
       {products.map((item) => (
        <NewSlider item ={item} key={item.id} />
    ))}

</AliceCarousel>

     
    </Conatiner>
  )
}

export default NewSliders
