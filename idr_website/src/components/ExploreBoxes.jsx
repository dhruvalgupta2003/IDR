import React from 'react'
import styled from 'styled-components'
import { popularBoxes } from '../data';
import Service from './Service';
import { mobile8 } from '../responsive'
import { mobile4 } from '../responsive'
import ExploreSingleBoxes from './ExploreSingleBoxes';

const Container=styled.div`
    padding:0px;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    
`
;
const Title = styled.p`
color: #AFAFAF;
font-weight: 700;
font-size: 60.0775px;
text-align:center;
font-family:'syne';
padding:20px;
${mobile8({fontSize:"40px"})}
${mobile4({fontSize:"30px"})}

`
const Wrapper = styled.div`

padding:50px 0px;

`

function ExploreBoxes() {
  return (
    <Wrapper>
        
    <Container>
     
     {popularBoxes.map((item) => (
        <ExploreSingleBoxes item ={item} key={item.id} />
    ))}


    </Container>
    </Wrapper>
  )
}

export default ExploreBoxes