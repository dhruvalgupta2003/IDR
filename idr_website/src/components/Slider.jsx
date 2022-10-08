
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useState } from 'react';
import { mobile2 } from '../responsive';
import { mobile3 } from '../responsive';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import {  useEffect } from 'react';
const Container = styled.div`
background-color:black;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
${mobile({overflow:"hidden"})}

`
const Arrow = styled.div`

`
;
const Wrapper = styled.div`
`
;
const Slide = styled.div`

`;
const ImgContainer = styled.div`
  margin-bottom:15%;

`
;
const Image =  styled.img`
height:83vh;
display:flex;

margin-top:-8%;
margin-left:auto;
margin-right:auto;
${mobile({height:"40vh"})}
${mobile2({height:"30vh"})}
${mobile2({height:"20vh"})}

`
;
const InfoContainer = styled.div`

`;

const Title = styled.h1`
font-family:'syne';
// font-style:normal;
font-weight: 800;
font-size: 71.299px;
margin:20px;
background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;


// text-shadow: 8.16189px 19.2917px 2.96796px rgba(0, 0, 0, 0.25);
${mobile({fontSize:"84px",fontWeight:"700",textAlign:"center"})}
${mobile2({fontSize:"64px",fontWeight:"700",textAlign:"center"})}
${mobile2({fontSize:"44px",fontWeight:"700",textAlign:"center"})}


`;
const Desc=styled.p`

`;
const Button= styled.button`


`;





const Slider = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2]
  const [products,setProducts] = useState({});
  
  // 62d842d29d3cbb7a03b85b9e
    
    useEffect(()=>{
      const getProducts = async()=>{
        try{
          const res = await axios.get( `http://localhost:8080/api/products/find/`+id)
          
          setProducts(res.data);
          console.log(res);
          
        }catch(err){
          console.log(err);
        }
      }
      getProducts();
    },[id]);

 
  



  return (
    <Container>
        <Arrow  >
            

        </Arrow>
        <Wrapper >
         
          <Slide >
          <ImgContainer>
          <Title>{products.title}</Title>
          <Image src={products.img}/>
          </ImgContainer>
          <InfoContainer>
            <Title></Title>
            <Desc></Desc>
            {/* <Button></Button> */}
          </InfoContainer>
          </Slide>
          
        </Wrapper>
        <Arrow  >
            
        </Arrow>
    </Container>
  )
}

export default Slider
