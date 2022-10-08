import React from 'react'
import styled from 'styled-components'
import { mentorsItems} from '../data';
import Mentor from './Mentor';
import { mobile8 } from '../responsive'
// import AOS from "aos";
// import "aos/dist/aos.css"
import { mobile4 } from '../responsive'
// import Service from './Service';
const Container=styled.div`
    padding:0px;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    background-color: black;
`
;
const Title = styled.p`
background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
font-weight: 700;
font-size: 60.0775px;
text-align:center;
font-family:'syne';
padding:20px;
${mobile8({fontSize:"40px"})}
${mobile4({fontSize:"30px"})}

`
const Wrapper = styled.div`
background-color:black;
padding:50px 0px;

`

function Mentors() {
//   AOS.init({
//     duration:2000
//   })
  return (
    <Wrapper >
        <Title>Mentors</Title>
    <Container>
     
     {mentorsItems.map((item) => (
        <Mentor item ={item} key={item.id} />
    ))}


    </Container>
    </Wrapper>
  )
}

export default Mentors