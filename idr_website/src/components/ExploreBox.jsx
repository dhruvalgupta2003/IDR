import { mobile } from '../responsive'
import { mobile2 } from '../responsive'
import { mobile3 } from '../responsive'
import { mobile9 } from '../responsive'
import { mobile10 } from '../responsive'
import { mobile6 } from '../responsive'
import { mobile8 } from '../responsive'
import React from 'react'
import styled from 'styled-components'
import ExploreBoxes from '../components/ExploreBoxes'

const Container = styled.div`
background-color:#1E1E1E;
padding:20px;
${mobile3({display:"none"})}

`

const Title = styled.div`
padding:20px;
color: #AFAFAF;
font-weight: 700;
font-size: 60.0775px;
text-align:center;
font-family:'syne';
${mobile9({fontSize:"50px",padding:"10px"})}
${mobile2({fontSize:"40px",padding:"5px",fontWeight:"500"})}
`

const Wrapper = styled.div`
background-color: rgba(0, 0, 0, 0.17);
margin:0px 50px;
box-shadow: 0px 10.2571px 12.4551px rgba(0, 0, 0, 0.25);
border-radius: 16.851px;
`

const Wrapper1 = styled.div`
display:flex;

align-items:center;
justify-content:center;
overflow:hidden;


${mobile({marginTop:"40px"})}
${mobile3({marginTop:"70px"})}

`

const Image = styled.img`
height:20vh;


${mobile10({height:"15vh",width:"20vh"})}
${mobile6({height:"10vh",width:"15vh"})}
${mobile2({display:"flex",marginRight:"auto",marginLeft:"auto"})}




`
const InfoContainer = styled.div`
// margin:0px 50px;

`
const Desc =styled.p`

font-weight:700;
width:70%;
color: #AFAFAF;
font-family: 'inter';
font-style: normal;
font-weight: 400;
font-size: 22px;
text-align:center;
${mobile10({fontSize:"18px",width:"90%",fontWeight:"700"})}
${mobile6({fontSize:"16px",width:"90%",fontWeight:"700"})}
${mobile({fontSize:"16px",width:"90%",fontWeight:"700"})}
${mobile2({fontSize:"15px",padding:"5px",fontWeight:"700"})}
${mobile2({display:"none"})}

`

const ImageContainer = styled.div`

`
const ImageTitle = styled.p`
font-size:15px;
color: #AFAFAF;
text-align:center;
margin-top:-3vh;
font-weight:500;
${mobile10({marginTop:"-2vh"})}
${mobile({fontSize:"12px",width:"100%",marginTop:"-1vh"})}
${mobile2({fontSize:"12px",width:"100%",marginTop:"1vh"})}
`





function ExploreBox() {
  return (
    <Container>
        <Title>Explore With Us</Title>
        <Wrapper>
        <Wrapper1>
            <ImageContainer>
                <Image src='https://cdn.discordapp.com/attachments/891025496601661504/999371967465533460/unknown.png'/>
                <ImageTitle>RESEARCH & DEVELOPMENT PRIVATE LIMITED</ImageTitle>
            </ImageContainer>
            <InfoContainer>
                {/* <Title >Just A Beginning In Indian Skies</Title> */}
                <Desc>IDR is working on Nexten drone related Technologies
 which can revolutionize the approach towards Made in India
as well as Self-reliant India.
</Desc>

            </InfoContainer>
            {/* <Tape><marquee style={{ color: 'red', fontSize: '3em' }}>Test</marquee></Tape> */}
            
        </Wrapper1>
        
        <ExploreBoxes />

        </Wrapper>



    </Container>
  )
}

export default ExploreBox