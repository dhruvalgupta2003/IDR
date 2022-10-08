import { ShoppingCartOutlined , SearchOutlined , FavoriteBorderOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { popularDrones } from '../data';
import { mobile } from '../responsive'
import { mobile8 } from '../responsive'
import { mobile3 } from '../responsive';
import { mobile4 } from '../responsive'
import CircleIcon from '@mui/icons-material/Circle';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"
const Wrapper = styled.div`
background-color: #AFAFAF;
`

const Info = styled.div`

font-weight: 200;
color:white;
text-align:left;

// position:absolute;


display:flex;
flex-direction:column;

transition: all 0.5s ease;
// cursor:pointer;
font-size: 15.7122px;
line-height: 150%;
${mobile3({lineHeight:"120%"})}

`

;
const Container = styled.div`

    margin:30px 60px;
    width:480px;
    height:15.5rem;
    display:flex;
    align-items:center;
   
    transition: all 0.5s ease;

    background-color:black;
    // background-color: #a3a2a2;
    // background: linear-gradient(186deg, rgba(211,208,255,1) 5%, rgba(179,175,175,1) 45%, rgba(198,210,255,1) 82%, rgba(102,103,99,1) 92%);
    // background: linear-gradient(186deg, rgba(197,195,218,1) 5%, rgba(180,207,255,1) 45%, rgba(125,153,252,1) 82%, rgba(201,235,255,1) 92%);
    // background: linear-gradient(186deg, rgba(130,174,255,1) 9%, rgba(201,235,255,1) 59%);
    // background: linear-gradient(186deg, rgba(177,179,177,1) 19%, rgba(217,217,217,1) 59%);
    // background: linear-gradient(186deg, rgba(131,162,131,1) 1%, rgba(172,169,169,1) 42%);
    border-radius:8%;
    box-shadow: 4px -2px 13.2571px 10px   #1E1E1E;
    
    ${mobile({minWidth:"170px",height:"11rem"})}
    ${mobile8({minWidth:"90px",height:"10rem",margin:"10px 16px",width:"380px"})}
    ${mobile4({minWidth:"120px",height:"8rem",margin:"10px 16px"})}
    ${mobile3({minWidth:"70px",height:"10rem",margin:"10px 8px",width:"330px"})}
    &:hover{
      transition: all 0.5s ease;
      transform: scale(1.1);
  }
    
    
`;

const Heading = styled.p`
font-size:22px;
font-weight:700;
line-height:150%;
font-family:'syne';
// color:white;
background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
${mobile8({lineHeight:"120%"})}
${mobile3({fontSize:"18px"})}
`

const  Image = styled.img`
    height:55%;
    z-index:2;
    
    

    
`
const Desc = styled.div`
display:flex;
align-items:center;
font-size:14px;
font-weight:600;
color:white;
${mobile8({fontSize:"12px"})}
${mobile3({fontSize:"10px"})}





`




const Product = ({item}) => {
  
  AOS.init({
    duration:2000
  })


  return (
    
    <Link to={`/product/${item._id}`} style={{ textDecoration: 'none' }}>
    <Container data-aos={"fade-up"}>
        
        <Image  src={item.img} />
        <Info >
        <Heading>{item.title}</Heading>
        <Desc><CircleIcon style={{fontSize:"7px",marginRight:"10px"}}/>{item.features3}</Desc>
        <Desc><CircleIcon style={{fontSize:"7px",marginRight:"10px"}}/>{item.features}</Desc>
        <Desc><CircleIcon style={{fontSize:"7px",marginRight:"10px"}} />{item.features}</Desc>
       
        </Info>
     


    </Container>
    </Link>  
    
  )
}

export default Product;
