import React from 'react'
import styled from 'styled-components'
import { popularDrones } from '../data';
import Product from './Product';
import { mobile8 } from '../responsive';
import { mobile4 } from '../responsive';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Container=styled.div`
    padding:0px;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    background-color:black;
`
;
const API = process.env.API_ENDPOINT || 5000
const Title = styled.p`
// color: #AFAFAF;
// color:#7CB9E8;
// color:#d63e3e;
background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
font-weight: 700;
margin-top:5%;
font-size: 60.0775px;
text-align:center;
font-family:'syne';
padding:20px;
${mobile8({fontSize:"40px"})}
${mobile4({fontSize:"30px"})}


`
const Wrapper = styled.div`
// background-color:black;
background-color:black;
padding:50px 0px;


`

function Products() {
  const [products,setProducts] = useState([]);
  

  useEffect(()=>{
    const getProducts = async()=>{
      try{
        const res = await axios.get( `http://localhost:8080/api/products/`)
        
        setProducts(res.data);
        console.log(res);
        
      }catch(err){
        console.log(err);
      }
    }
    getProducts();
  },[]);






  return (
    <Wrapper>
        <Title>Our Products</Title>
    <Container>
     
     {products.map((item) => (
        <Product item ={item} key={item.id} />
    ))}


    </Container>
    </Wrapper>
  )
}

export default Products;
