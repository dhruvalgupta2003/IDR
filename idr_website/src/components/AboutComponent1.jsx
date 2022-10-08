import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { mobile3 } from '../responsive'


const Container =styled.div`
background-color:black;
display:flex;
flex-direction:column;

`

const Title =styled.h1`
display:flex;

align-items:center;
justify-content:center;
// color:white;
background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

font-weight:700;
font-family: 'Syne';
font-size:60.3px;
margin:15px 10px;
${mobile({fontSize:"50px"})}
${mobile3({fontSize:"30px"})}

`

const ImageContainer =styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const Image =styled.img`
width:70%;
// height:70vh;
object-fit:cover;
${mobile({width:"80%"})}

`
const InfoContainer =styled.div`
background-color:white;
border-radius:17px;
box-shadow: -2.2309px 0.743634px 47.5926px -11.1545px #FFFFFF;
width:55%;
// display:flex;
// justify-content:center;
// align-items:center;
margin:25px 25px;
margin-left:20%;
${mobile({marginTop:"40px"})}
${mobile({marginBottom:"40px"})}
${mobile3({width:"60%"})}

`
const Desc =styled.p`
font-weight: 500;
font-size: 20.309px;
font-family: 'Inter';
padding:20px;
${mobile({fontSize:"15px"})}
${mobile3({fontSize:"10px"})}
`




const AboutComponent1 = () => {
  return (
    <Container>
        
        <Title>
            ABOUT US
        </Title>

        <ImageContainer>
            <Image src="https://cdn.discordapp.com/attachments/891025496601661504/999952915928207420/unknown.png" />
        </ImageContainer>

        {/* <InfoContainer>
            <Desc>IDR acronym of "Indian Defence Reforms". In May 2019 we created a page on Instagram by the name of Indian Defence Reforms. We started sharing daily defence updates related to the Indian Army, Navy & Airforce. We got attention and people started loving our works. From May 2019 till August 2021 more than 25000 IDR'ians joined Indian Defence Reforms on various media. This motivated us ,that now we should bring more for our audience and our Nation.So,we decided to start our company on 13 August 2021. And as a result we started our company "IDR Research and Development Pvt Ltd".</Desc>
        </InfoContainer> */}
        
    </Container>
  )
}

export default AboutComponent1

