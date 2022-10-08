import React, { useState } from 'react'
import styled from 'styled-components'
import useCollapse from 'react-collapsed';
import { mobile } from '../responsive'
import { mobile3 } from '../responsive'
import { findByLabelText } from '@testing-library/react';



const Box =styled.div`
display:flex;
color:white;
justify-content:center;
align-items:center;
margin:30px 0px;
${mobile({margin:"50px 0px"})}
${mobile3({display:"flex",flexDirection:"column"})}

`

const Left =styled.div`
display:flex;
flex-direction:column;
// flex:1;
${mobile({marginBottom:"20px"})}

`

const ImageContainer =styled.div`
display:flex;
align-items:center;
justify-content:center;
margin:10px 0px;

`

const Image =styled.img`
width:40%;
${mobile({width:"80%",borderRadius:"7px"})}

`

const Profile =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const Name =styled.p``

const Designation =styled.p``

const Right =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background: rgba(0, 0, 0, 0.25);
box-shadow: 0px 2.97454px 16.36px rgba(0, 0, 0, 0.25);
border-radius: 17.1036px;
width:60%;
// position:absolute;
${mobile({padding:"10px"})}

`

const Desc =styled.p`
font-weight: 400;
font-size: 20.309px;
line-height: 150.5%;
padding:20px;
word-spacing:2px;
// display:flex;
// flex-direction:column;
${mobile({fontSize:"16px",marginBottom:"-20px"})}
${mobile3({fontSize:"12px",textAlign: "left"})}
`
const Section =styled.p`
font-weight: 400;
font-size: 20.309px;
line-height: 150.5%;
padding:20px;
word-spacing:2px;
${mobile({fontSize:"16px",lineHeight:"140%"})}
${mobile3({fontSize:"12px",textAlign: "left"})}

`
const Button =styled.button`
border:none;
cursor:pointer;
padding:10px;
background-color:black;
color:#64ffda;
// position:absolute;
margin:0px 10px;
 ${mobile({marginRight:"27px",borderRadius:"7px"})}

`


const AbtComponent = ({item}) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps , getToggleProps } =
useCollapse({isExpanded});
  return (
    <>
     
     <Box>
      
     <Left>

     <ImageContainer>
       <Image src={item.img}/>
     </ImageContainer>

     <Profile>
       <Name>{item.name}</Name>
       <Designation>{item.designation}</Designation>
    </Profile>
    </Left>


    <Right>
      <Desc>{item.desc}</Desc>
      <Section {...getCollapseProps()}>{item.extra}<br/><br/>{item.extra2}</Section> 
     </Right> 
     <Button
    
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => ! prevExpanded),

        })}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
          
       
      </Button>   



    


     </Box> 


     </> 
  )
}

export default AbtComponent