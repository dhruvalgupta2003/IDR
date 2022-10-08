import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { mobile2 } from '../responsive';
import {mobile7} from'../responsive';
import {mobile3} from '../responsive';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const Container = styled.div`
background-color:black;
text-align:center;
display:flex;
align-items:center;
justify-content:center;


`
const Wrapper = styled.div`
margin:10% 0px;



`
const Title = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 60.8432px;
// color: #AFAFAF;
background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
${mobile({fontSize:"55px",flexDirection:"column"})}
${mobile2({fontSize:"40px",flexDirection:"column"})}

`
const Left = styled.div`
// flex:1;
// display:flex;
// margin:0px 10px;
flex-direction:column;



`

const Center = styled.div`
// flex:1;
`
const Right = styled.div`
// flex:1;
`
const Desc = styled.div`

color:white;
text-align:center;
width:80%;

font-family: 'Syne';
font-style: normal;
font-weight: 600;
font-size:20px;
color:#fffff;
${mobile({fontSize:"15px"})}
${mobile2({fontSize:"12px"})}
${mobile3({fontSize:"10px"})}
`
const InfoContainer = styled.div`
display:flex;
align-items:center;
// justify-content:space-between;
justify-content:center;


`
const Image = styled.img`
height:70vh;

${mobile({height:"45vh"})}
${mobile7({height:"30vh"})}
${mobile3({height:"22vh"})}
`
const Circle = styled.div`
display:flex;

justify-content:center;
align-items:center;
// margin:0px 10px;
border-radius: 50%;
width:200px;
height:200px;
background-color:#1e1e1e;
// background-color: black;
margin:20px -100px;
// box-shadow: 0px 10.3879px 12.6138px rgba(0, 0, 0, 0.25);
${mobile({height:"170px",width:"170px",margin:"20px -90px"})}
${mobile2({height:"130px",width:"130px",margin:"20px -70px"})}
${mobile3({height:"110px",width:"110px",margin:"20px -65px"})}
`

const Features = () => {
  // const [products,setProducts] = useState([]);
  // 62d842d29d3cbb7a03b85b9e
  const location = useLocation();
  const id = location.pathname.split("/")[2]
  const [products,setProducts] = useState({});
    
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
       <Wrapper>
            <Title>FEATURES</Title>
            <InfoContainer>
            <Left>
                <Circle>
                <Desc>{products.features6}</Desc>
                </Circle>
                <Circle>
                <Desc>{products.features7}</Desc>
                </Circle>
            </Left>
            <Center>
            <Image src={products.img3} />
            </Center>
            <Right>
                <Circle>
            <Desc>{products.features8}</Desc>
            </Circle>
            <Circle>
            <Desc>{products.features9}</Desc>
            </Circle>
            </Right>
            </InfoContainer>
            </Wrapper>
        
    </Container>
  )
  
}

export default Features
