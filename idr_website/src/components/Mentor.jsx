import React from 'react'
import styled from 'styled-components';

import { mobile8 } from '../responsive'

// import AOS from "aos";
// import "aos/dist/aos.css"
import { mobile4 } from '../responsive'
import AOS from "aos";
import "aos/dist/aos.css"

const Info = styled.div`
opacity:0;
width:100%;
font-weight:900;
text-align:center;
height:25%;
position:absolute;

background-color: rgba(255,255,255,0.2);
z-index:3 ;
// display:flex;
align-items:flex-end;
justify-content:center;
transition: all 0.5s ease;
cursor:pointer;


`

;
const Container = styled.div`
flex:1;
margin:5px 20px;
min-width:220px;
height:320px;
overflow:hidden;
display:flex;
align-items:flex-end;
justify-content:center;
border-radius:7%;
background-color: #1e1e1e;
position:relative;

    ${mobile8({minWidth:"100px",height:"13rem",margin:"10px 10px"})}
    ${mobile4({minWidth:"80px",height:"10rem",margin:"10px 10px"})}
    ${mobile4({margin:"10px 10px"})}
&:hover ${Info}{
    opacity:1;
   
    

}`;

const  Image = styled.img`
    height:50%;
    z-index:2;
    display:flex;
    margin-top:auto;
    margin-bottom:auto;
    ${mobile8({height:"40%"})}
    transition: all 0.5s ease;
    ${mobile4({height:"50%"})}
    &:hover{
      transition: all 0.5s ease;
      transform: scale(1.1);
  }
    
`

const Icon = styled.div`s

font-weight:900;

display:flex;
align-items:center;
justify-content:center;
margin:12px 10px;
transition:all 0.5s ease;
bottom:0;
line-height:80%;
${mobile4({fontSize:"12px",lineHeight:"50%"})}
color:white;
&:hover{
    background-color:#e9f5f;
    transform: scale(1.2);
    
}
`


const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color: white;
position:absolute;
// z-index:0;

`

const Mentor = ({item}) => {
//   AOS.init()\
AOS.init({
  duration:2000
})
  return (
    
    <Container data-aos={"fade-up"} >
        {/* <Circle /> */}
        <Image  src={item.img} />
        <Info >
        <Icon>
                {item.name}
            </Icon>
            <Icon>
                {item.designation}
            </Icon>
            
            
        </Info>
        


    </Container>
    
  )
}

export default Mentor;