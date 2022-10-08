
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { mobile2 } from '../responsive'
import { mobile3 } from '../responsive'
import { mobile8 } from '../responsive'
import { mobile10 } from '../responsive'
import Marquee from "react-fast-marquee";
import { keyframes } from 'styled-components'
import Lottie from 'react-lottie';
import animationData from './dronelottie.json';
import AOS from "aos";
import "aos/dist/aos.css"
const Container = styled.div`
background-color:black;
display:flex;
// min-height:100vh;
flex-wrap:wrap;

// align-items:center;
// justify-content:center;



`
const Wrapper1 = styled.div`
display:flex;
// flex-wrap:wrap;
align-items:center;

overflow:hidden;


${mobile({marginTop:"40px",flexDirection:"column"})}
${mobile3({marginTop:"70px"})}

`
const Wrapper2 = styled.div`



`

const ImageContainer = styled.div`



`

const rotate = keyframes`
0%{
  transform:rotate(0deg)
            translate(-25px)
            rotate(0deg);

}
100%{
  transform:rotate(360deg)
            translate(-25px)
            rotate(-360deg);
}
`;
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Image = styled.img`

display:flex;

margin-top:10%;
margin-left:-20%;

height:60vh;

overflow:hidden;

animation: ${rotate} 6s linear infinite;
${mobile({height:"45vh",padding:"5vh",marginLeft:"auto",marginRight:"auto",display:"flex"})}

${mobile2({height:"35vh"})}





`
// animation: ${rotate} 3s ease-out;



const InfoContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
${mobile({marginLeft:"auto",marginRight:"auto",display:"flex"})}
`
const Title = styled.div`

background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

font-size:60px;
margin-top:4%;
width:70%;
line-height: 150%;

font-family: 'Anton', sans-serif;

letter-spacing:1px;
font-weight:500;
${mobile2({fontSize:"28px"})}
${mobile8({fontSize:"24px"})}
`
const Tape = styled.div`
background-color:black;
`
const Desc =styled.p`

// justify-content:left;
width:60%;
color: white;
font-family: 'inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
margin-top:3%;
margin-left:-10%;
text-align:left;
${mobile2({fontSize:"15px"})}

`
const Desc1 = styled.p`

`
const Rectangle = styled.div`
  height:45vh;
  width:20%;
  margin:7% 0px;
  background-color:black;
  // right:0;
  display:flex;
  position:absolute;

  box-shadow: 0 0 0 25px #1e1e1e;
  animation: ${rotate} 10s linear infinite;
  ${mobile2({height:"22vh",width:"50%",boxShadow: "0 0 0 20px #1e1e1e"})}
  ${mobile({boxShadow: "0 0 0 40px #1e1e1e",height:"20vh",width:"42%"})}
  ${mobile8({boxShadow: "0 0 0 25px #1e1e1e",height:"20vh",width:"44%"})}
`
const ParentContainer = styled.div`
${mobile({display:"flex",alignItems:"center",justifyContent:"center"})}
${mobile2({marginTop:"-10%"})}
${mobile2({display:"flex",alignItems:"center",justifyContent:"center"})}
${mobile8({display:"flex",alignItems:"center",justifyContent:"center"})}
`

const Beginning = () => {
  AOS.init({
    duration:200
  })
  return (
    <Container >
        <Wrapper1 
        >
           
            <InfoContainer >
                <Title data-aos="fade-up" >Just A Beginning In Indian Skies</Title>
                <Desc data-aos="fade-up"
                  data-aos-delay="600"
     >IDR Research and Development private limited is revolutionizing the approach towards Make In India
          </Desc>

            </InfoContainer>
           
           
            <ParentContainer>
        <Rectangle>
            
          </Rectangle>
          <ImageContainer data-aos={"fade-left"}>
                <Image src='https://cdn.discordapp.com/attachments/891025496601661504/999588478830514186/unknown.png'/>
            </ImageContainer>
            </ParentContainer>
        </Wrapper1>
      
      



       
    </Container>
  )
}

export default Beginning;
