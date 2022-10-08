import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { mobile8 } from '../responsive'
// import { mobile2 } from '../responsive'
import { mobile3 } from '../responsive'

const Container =styled.div`
background-color:black;
`
const Wrapper =styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:0px 20px;
`
const LeftImg =styled.div`
display:flex;
`
const Image =styled.img`
width:100%;
height:7vh;
margin-right:45px;
${mobile({height:"4vh"})}
${mobile({marginRight:"15px"})}
${mobile8({height:"4vh",marginRight:"15px"})}
${mobile3({height:"2.4vh",marginRight:"8px"})}
`
const Title =styled.h1`
font-weight: 400;
font-size: 57.2598px;
// line-height: 150%;
margin-top:5%;
margin-bottom:3%; 

display:flex;
// color:#FFFFFF;
background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

${mobile({fontSize:"40px", fontWeight:"500"})}
${mobile8({fontSize:"40px", fontWeight:"500"})}
${mobile3({fontSize:"20px", fontWeight:"500"})}




`

const RightImg =styled.div`
display:flex;
left:-20%;
`
const Img =styled.img`
width:100%;
height:15vh;
margin-left:-10px;
${mobile({height:"10vh"})}
${mobile8({height:"10vh"})}
${mobile3({height:"6vh",marginLeft:"-8px"})}
`
const Desc =styled.p`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
font-weight: 400;
// text-align:center;
font-size: 22.309px;
line-height: 130%;

color: #FFFFFF;
padding:10px 30px;
${mobile({fontSize:"18px"})}
${mobile({padding:"12px 40px"})}
${mobile3({fontSize:"14px"})}

`
const Decs2 =styled.p`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
font-weight: 700;
font-size: 22.309px;
line-height: 150%;
color: #FFFFFF;
padding:10px 0px;
margin-top:10px;
${mobile3({fontSize:"14px"})}

`


const AboutComnonent2 = () => {
  return (
    <Container>
        <Wrapper>
            <LeftImg>
                <Image src="https://cdn.discordapp.com/attachments/891025496601661504/999055510655479939/unknown.png"/>
            </LeftImg>
            <Title>
                What are we doing Under IDR?
            </Title>

            <RightImg>
                <Img src="https://cdn.discordapp.com/attachments/891025496601661504/999055576090824845/unknown.png" />
            </RightImg>
            </Wrapper>

            <Desc>
                Team IDR Research and Development Private Limited is working on NextGen drone related technologies including others, which can revolutionize the approach towards made in India as well as self reliant India in Indian drone Industry.
            </Desc>
            <Desc>
                IDR Research and Development Pvt Ltd is totally working on different verticals unlike already existing companies. Our aim is to provide innovative, cost effective drones and related technologies MADE IN INDIA 🇮🇳.
             </Desc>

             <Desc>
                Apart from Drone tech IDR Research and Development Pvt Ltd is also providing services in Drone technology, 3-D modelling, Prototyping, Product Design and R&D. We provide end to end solutions from initial Designing to final Prototype development. We are working with the Indian army in the prototyping domain but we are hungry for more.
            </Desc>

            <Decs2>
                <span>Give us work,</span>
                <span>Hold Our hands and,</span>
                <span>We will never let you disappoint</span>
            </Decs2>
        


    </Container>
  )
}

export default AboutComnonent2