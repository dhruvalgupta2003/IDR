import React from 'react'
import styled from 'styled-components'
import { userMedia } from '../AboutData'

const Container =styled.div`
background-color:#1E1E1E;
// display:flex;
justify-content:center;
align-items:center;`

const Title =styled.h1`
font-weight: 700;
font-size: 57.2598px;
line-height: 150%;
color:#FFFFFF;
display:flex;

align-items:center;
justify-content:center;
`
const Wrapper =styled.div`
display:flex;
// flex-direction:column;
align-items:center;
justify-content:center;
`


const Wrapper1 =styled.div`
display:flex;
justify-content:center;
align-items:center;
// overflow:hidden;
// margin-bottom:-30%;
margin:40px 0px;
padding:0px 30px;
`
const ImageContainer =styled.div`
display:flex;
align-items:center;

justify-content:center;`

const Image =styled.img`
height:40vh;
width:100%;
// object-fit:cover;
`
const Desc =styled.div`
padding:15px;
// width:70%;
color: #AFAFAF;
font-family: 'inter';
font-style: normal;
font-weight: 400;
font-size: 22px;`
const InfoContainer =styled.div`
display:flex;
flex-direction:column;
align-items:center;

justify-content:center;`

const Wrapper2 =styled.div`
display:flex;
flex-direction:row-reverse;
justify-content:center;

align-items:center;
// overflow:hidden;
`
const Image2 =styled.img`
height:40vh;
width:100%;
// object-fit:cover;
`

const Wrapper3 =styled.div`
display:flex;
justify-content:center;
align-items:center;
// overflow:hidden;
`
const Image3 =styled.img`
height:40vh;
width:100%;
// object-fit:cover;

`

const MediaComponent = ({item}) => {
  return (
    <Container>
        <Title>
            Latest Updates
        </Title>

        <>
        
        {userMedia.map((item) =>(
        <Wrapper>

        <Wrapper1>

            <ImageContainer>
                <Image src={item.img1}/>
            </ImageContainer>
            <InfoContainer>
                <Desc>{item.features}</Desc>
            </InfoContainer>
            
        </Wrapper1>




        <Wrapper2>
            
            <ImageContainer>
                <Image2 src={item.img2}/>
            </ImageContainer>


            <InfoContainer>
                <Desc>{item.features2}    
                </Desc>
            </InfoContainer>
            
        </Wrapper2>


        
        <Wrapper3>
            
            <ImageContainer>
                <Image3 src={item.img3}/>
            </ImageContainer>


            <InfoContainer>
                <Desc>{item.features3}    
                </Desc>
            </InfoContainer>
            
        </Wrapper3>

        </Wrapper>
        
        ))}
        </>
        
    </Container>
  )
}

export default MediaComponent