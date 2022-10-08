import React from 'react';
import styled from "styled-components";
import { mobile6 } from '../responsive'
import Burger from './Burger2';

const Container = styled.div`
    height:80px;
    // position:absolute;
    background-color: black;   
    // opacity:10;
`
const Wrapper =styled.div`
    padding: 10px 20px; 
    display:flex;
    align-items:center;
    justify-content:space-between;
    
`

const Left =styled.div`
    // flex:1;
    display:flex;
    align-items:center;
   
`;

const Image = styled.img`
width:50%;
height:8vh;
object-fit:cover;
`
const Center =styled.div`
    // flex:3;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    ${mobile6({display:"none",flexFlow: "column nowrap",backgroundColor:"black",position:"fixed",top:"0px",right:"0",height:"100vh",width:"300px"})}

`;

const Part1 =styled.h1`
font-size:22px;
    // font-weight:bold;
    // display:flex;
    justify-content:space-between;
    margin-right:27px;
    color:white;
    ${mobile6({padding:"20px 0px"})}

`

const Part2 =styled.h1`
font-size:22px;
    // font-weight:bold;
    // display:flex;
    margin-right:27px;
    color:white;
    ${mobile6({padding:"20px 0px"})}
`
const Part3 =styled.h1`
font-size:22px;
    // font-weight:bold;
    // display:flex;
    margin-right:27px;
    color:white;
    ${mobile6({padding:"20px 0px"})}
`
const Part4 =styled.h1`
font-size:22px;
    font-weight:bold;
    // display:flex;
    margin-right:27px;
    color:white;
    ${mobile6({padding:"20px 0px"})}
`




const Right =styled.div`
    // flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile6({display:"none"})}

`;

const MenuItem = styled.div`
    margin-left:25px;
    font-size:16px;
    cursor:pointer;
    color:white;
`

const Imge =styled.img`
width:10%;
height:3vh;
margin-left:10px;
object-fit:cover;
// display:flex;
`






const Header = () => {
    return (
      <Container>
          <Wrapper>
              <Left>
                  <Image src="https://cdn.discordapp.com/attachments/891025496601661504/994320691656659057/unknown.png"/>
              
              </Left>
              {/* <Burger/> */}


              {/* <Center >
                <Part1>Home</Part1>
                <Part2>About Us</Part2>
                <Part3>Product</Part3>
                <Part4>Contact Us</Part4>
                
              </Center> */}


              <Right>
                  <MenuItem>Made in India</MenuItem>
                  <Imge src="https://cdn.discordapp.com/attachments/891025496601661504/994337086209527960/9-2-india-flag-picture.png"/>
                  
  
              </Right>
          </Wrapper>
          
      </Container>
    )
  }
  
  export default Header
