import React from 'react'
import styled from 'styled-components'
import Popup from 'reactjs-popup';
import { mobile6 } from '../responsive'
import { mobile3 } from '../responsive'
import { mobile11 } from '../responsive'
import {mobile4} from '../responsive'
const Container =styled.div`
background-color:#262626;
border-radius:15px;
padding:50px 20px;
margin:50px 40px;

display:flex;
flex-direction:column;
&:hover{
  transition: all 0.5s ease;
  transform: scale(1.1);
}
${mobile6({margin:"50px 15px",padding:"50px 20px"})}
${mobile3({margin:"50px 7px",padding:"30px 2px"})}
`
const Left = styled.div`
display:flex;
color:white;
flex-direction:column;
align-items:center;
justify-content:center;

`
const ImageContainer= styled.div`
display:flex;
align-items:center;
justify-content:center;

`
const Image = styled.img`
width:80%;
`
const Profile =styled.div`
padding-top:40px;
`

const Name =styled.p`
font-size:22px;
${mobile6({fontSize:"16px"})}
${mobile3({fontSize:".6rem"})}
${mobile11({fontSize:".85rem"})}

`

const Designation =styled.p`
display:flex;
justify-content:center;
align-items:center;
${mobile6({fontSize:"14px"})}
${mobile3({fontSize:".5rem"})}
${mobile11({fontSize:"0.7rem"})}

`


const Button =styled.button`
margin-top:8%;
width:50%
margin-left:2%;
cursor:pointer;
border:0px;
color:white;
font-size:16px;
background-color:#262626;
${mobile6({fontSize:".5rem"})}
${mobile11({fontSize:"0.7rem"})}
`
const NewBox = styled.div`
background-color:rgba(0,0,0,0.8);
width:100vw;
height:100vh;
// position:fixed;
display:flex;
align-items:center;
justify-content:center; 
`
const Modal = styled.div`
font-size: 12px;
background-color: #262626;
width:50%;
height:70vh;
margin-left:10%;
${mobile6({height:"50vh", width:"60%"})}
// position:fixed;
`
const Close =styled.button`
cursor: pointer;
position: absolute;
display: block;
padding: 2px 5px;
line-height: 20px;
right: 21%;
top: 16%;
${mobile3({top:"25.3%",right:"17%",fontSize:"24px",height:"1.4rem"})}
font-size: 24px;
background: #ffffff;
border-radius: 18px;
border: 1x solid #cfcece;`
const Box = styled.div`
display:flex;
flex-direction:column;`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-bottom:25px`
const Img = styled.img`
width:20%;
padding:30px 0px;
margin-left:8%;
${mobile6({width:"30%"})}`
const Header = styled.h1`
display:flex;
flex-direction:column;
width: 100%;
// border-bottom: 1px solid gray;
font-size: 28px;
text-align: center;
padding: 5px;
color:white;

${mobile6({fontSize:"15px" })}
${mobile4({fontSize:"11px" })}
`
const Content = styled.p`
width: 90%;
display:flex;
align-items:center;
justify-content:center;
// text-align:center;
// flex-direction:column;
color:white;

margin-left:4%;
font-size:15px;
${mobile6({fontSize:"12px",marginTop:"-22px"})}
${mobile4({fontSize:"0.6rem"})}
`
const Actions = styled.div`
width: 100%;
padding: 10px 5px;
margin: auto;
text-align: center;`


const AbtFinal = ({item}) => {
  return (
    <Container>
        
     <Left>

        <ImageContainer>
            <Image src={item.img}/>
        </ImageContainer>

        <Profile>
            <Name>{item.name}</Name>
            <Designation>{item.designation}</Designation>
        </Profile>
    </Left>




    <Popup
    trigger={<Button> Read More </Button>}
    modal
    nested
  >
    {close => (
      <NewBox>
      <Modal>
        <Close onClick={close}>
          &times;
        </Close>
        <Box>
        <Top>
        <Img src={item.img}/> 
        <Header> {item.name}
        <br />{item.designation}</Header>
        </Top>
        <Content>
          {' '}
          {item.desc}
          <br />
          {/* {item.extra} */}
        </Content>
        {/* <Actions>
          <Popup
            trigger={<Button> Trigger </Button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <Button
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </Button>
        </Actions> */}

        </Box>
      </Modal>
      </NewBox>  
    )}
  </Popup>







    </Container>
  )
}

export default AbtFinal
