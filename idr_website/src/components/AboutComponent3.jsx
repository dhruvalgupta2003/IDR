import React from 'react'
import styled from 'styled-components'
import { userData } from '../AboutData'
import AbtComponent from './AbtComponent'
import { mobile } from '../responsive'
import { mobile3 } from '../responsive'

const Container =styled.div`
background-color:#1E1E1E;
display:flex;
flex-direction:column;
// justify-content:center;
// align-items:center;
`

const Title =styled.h1`
font-weight: 400;
font-size: 57.2598px;
line-height: 150%;
display:flex;
align-items:center;
justify-content:center;
// color:#FFFFFF;
background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

margin-bottom:20px;
margin-top:70px;
${mobile({fontSize:"50px" , fontWeight:500})}
${mobile3({fontSize:"24px" , fontWeight:700})}

`
const Wrapper =styled.div`
// display:flex;
// flex-direction:column;

`





const AboutComponent3 = () => {
  return (
    <Container>
      <Title>
        About the Directors of IDR
      </Title>

      <Wrapper>
      {userData.map((item) =>(
        <AbtComponent item={item} key = {item.id} />

      ))}
      </Wrapper>

    </Container>
  )
}

export default AboutComponent3