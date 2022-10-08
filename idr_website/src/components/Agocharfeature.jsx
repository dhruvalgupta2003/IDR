// import { display } from '@mui/system';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { mobile2 } from '../responsive';
import { mobile3 } from '../responsive';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
const Container = styled.div`
background-color:black;
margin-top:-100px;



`
const Wrapper1 = styled.div`
display:flex;
justify-content:center;
align-items:center;

overflow:hidden;
// flex-wrap:wrap;
${mobile({marginTop:"40px"})}
${mobile3({marginTop:"70px"})}

`
const Wrapper2 = styled.div`
display:flex;
flex-direction:row-reverse;
justify-content:center;;
align-items:center;


`

const ImageContainer = styled.div`
// padding-bottom:px;
`
const Image = styled.img`
height:70vh;
display:flex;
${mobile({height:"40vh"})}
${mobile2({height:"35vh"})}
${mobile3({height:"30vh",width:"25vh"})}


`
const Image2 = styled.img`
height:50vh;
display:flex;
${mobile({marginBottom:"50px",height:"30vh"})}

${mobile2({height:"25vh"})}

${mobile3({height:"18vh"})}

`
const InfoContainer = styled.div`
margin:0px 10px;
margin-top:-80px


`
const Desc =styled.p`

padding:15px;
width:80%;
color: #AFAFAF;
font-family: 'inter';
font-style: normal;
font-weight: 600;
font-size: 25px;
${mobile({fontSize:"15px",padding:"10px",width:"100%"})}
${mobile({fontSize:"14px",padding:"10px",width:"100%"})}
${mobile({fontSize:"0.71rem",padding:"10px",width:"100%",padding:"5px"})}
`

const Agocharfeature = ({item}) => {
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
    
    AOS.init({
      duration:200
    })
  return (
    
   
    <Container>
        <Wrapper1 data-aos="fade-up">
            <ImageContainer>
                <Image src={products.img1}/>
            </ImageContainer>
            <InfoContainer>
                <Desc>{products.features}
</Desc>
<Desc>{products.features2}
 </Desc>
<Desc>{products.features3}</Desc>
            </InfoContainer>
            
        </Wrapper1>




        <Wrapper2 data-aos="fade-up">
            
        <ImageContainer>
                <Image2 src={products.img2}/>
            </ImageContainer>
            <InfoContainer>
                <Desc>{products.features4}
                   
</Desc>

<Desc>{products.features5}
   </Desc>
<Desc>{products.features6}
   
</Desc>
            </InfoContainer>
            
        </Wrapper2>
        
        
    </Container>
  )
}

export default Agocharfeature;
