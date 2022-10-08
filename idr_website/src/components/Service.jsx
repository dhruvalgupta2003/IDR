import { ShoppingCartOutlined , SearchOutlined , FavoriteBorderOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { popularProducts } from '../data';
import { mobile } from '../responsive'
import { mobile8 } from '../responsive'
import { mobile4 } from '../responsive'
import AOS from "aos";
import "aos/dist/aos.css"
const Wrapper = styled.div`
background-color: #1E1E1E;
`

const Info = styled.div`
font-weight: 500;
color:white;
text-align:center;
margin:10px;
position:absolute;
bottom:0;
// left:0;

// z-index:3 ;
display:flex;
// align-items:center;
// justify-content:center;
transition: all 0.5s ease;
cursor:pointer;
font-size: 15.7122px;
line-height: 150%;
${mobile8({fontSize:"12px"})}
${mobile4({fontSize:"12px"})}
`

;
const Container = styled.div`
    // flex:1;
    margin:20px 60px;
    min-width:280px;
    height:15.5rem;
    display:flex;
    transition: all 0.5s ease;
    // align-items:center;
    justify-content:center;
    background-color:#1E1E1E;
    position:relative;
    border-radius:8%;
    
    ${mobile({minWidth:"170px",height:"11rem"})}
    ${mobile8({minWidth:"150px",height:"10rem",margin:"10px 16px"})}
    ${mobile4({minWidth:"140px",height:"8rem",margin:"10px 16px"})}
    &:hover{
      transition: all 0.5s ease;
      transform: scale(1.1);
  }
    
    
`;

const  Image = styled.img`
    height:70%;
    z-index:2;
    
    ${mobile({height:"62%"})}
    ${mobile({height:"58%"})}
    ${mobile4({height:"66%"})}
  //   &:hover{
  //     transition: all 0.5s ease;
  //     transform: scale(1.2);
  // }
    
`

// const Icon = styled.div`
// width:40px;
// height:40px;
// // border-radius:50%;
// background-color: white;
// display:flex;
// align-items:center;
// justify-content:center;
// margin:10px;
// transition:all 0.5s ease;

// &:hover{
//     background-color:white;
//     transform: scale(1.2);
// }
// `

const Service = ({item}) => {
  AOS.init({
    duration:2000
  })
  return (
    <Container data-aos={"fade-up"}>
        
        <Image  src={item.img} />
        <Info >
            
                {item.title}
            
        </Info>



    </Container>
  )
}

export default Service;