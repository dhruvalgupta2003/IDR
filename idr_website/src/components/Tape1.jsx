import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';
import React from 'react'

import { mobile8 } from '../responsive'
import { mobile4 } from '../responsive'
import { mobile3 } from '../responsive'


const Wrapper= styled.div`
background-color:#1E1E1E;
`
const Container = styled.div`
height:60vh;
background-color:#00000040
;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
${mobile({height: "24vh",})}
${mobile8({height: "20vh",})}
${mobile3({height: "16vh",})}

`
const Title =styled.h1`
font-size:6vh;
margin:20px;
// font-family: 'Sansation';
text-align:center;
font-style: normal;
font-weight:700;
line-height: 150%;
color:#FFFFFF;
${mobile({fontSize:"3vh"})}
${mobile3({fontSize:"2.5vh",lineHeight:"100%"})}

`
const Desc =styled.div`
font-size:20px;
font-weight:300;
margin-bottom:20px;
line-height: 150%;
/* or 38px */

display: flex;
align-items: center;
text-align: center;
${mobile({textAlign: "center",fontSize:"18px"})}
color:#FFFFFF;
${mobile8({fontSize: "13px",})}
${mobile3({fontSize: "13px",lineHeight:"120%"})}

`
const InputContainer =styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
// border:1px solid lightgray;
${mobile({width: "80%"})}

`
const Input =styled.input`
border:none;
flex:8;
padding-left:20px;
`
const Button =styled.button`
border:none;
background-color:teal;
color:white;

flex:1;
`

function Tape1() {
  return (
    <Wrapper>
    <Container>
        <Title>Satisfaction is a rating. Loyality is a brand</Title>
        <Desc>Apart from Drone manufacturing we also use our skills and industry experience in service sectors by
 keeping mentioned mantra in minds.</Desc>
        
    </Container>
    </Wrapper>
  )
}

export default Tape1
