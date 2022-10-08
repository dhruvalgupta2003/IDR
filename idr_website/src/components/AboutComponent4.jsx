import React from 'react'
import styled from 'styled-components'
import { userData } from '../AboutData'
import AbtFinal from './AbtFinal'
import {mobile6} from '../responsive';
import {mobile3} from '../responsive';


const Container =styled.div`
background-color:black;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Wrapper =styled.div`
display:flex;
align-items:center;
justify-content:space-between;

`
const Title =styled.h1`

background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

display:flex;
justify-content:center;
align-items:center;
margin:50px 0px;
font-size:48px;
${mobile6({fontSize:"40px", fontWeight:"500"})}
${mobile3({fontSize:"30px", fontWeight:"500"})}
`
// const Image = styled.img``

const AboutComponent4 = () => {
  return (
    <Container>
        <Title>
          About the Directors of IDR
        </Title>

      <Wrapper>
      {userData.map((item) =>(
        <AbtFinal item={item} key = {item.id} />

      ))}
      </Wrapper>

    </Container>
  )
}

export default AboutComponent4
