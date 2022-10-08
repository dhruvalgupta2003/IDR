import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { mobile6 } from '../responsive'
const Image = styled.img`
width:40%;

`
const Nav = styled.nav`
  width: 100%;
  height: 75px;
  // border-bottom: 2px solid #f1f1f1;
  // padding: 0 20px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  background-color:black;

  .logo {
    padding: 15px 0;
  }
`

const Container = styled.div`
// margin-right:auto;
// margin-right:-20%;

display:flex;

`


const Right =styled.div`
    // flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile6({display:"none"})}

`;

const MenuItem = styled.div`
    // margin-left:25px;
    // font-size:16px;
    // cursor:pointer;
    color:white;
`

const Imge =styled.img`
width:5%;
// height:3vh;
margin:0px 10px;
// object-fit:cover;
// display:flex;
`


const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Image src="https://cdn.discordapp.com/attachments/891025496601661504/994320691656659057/unknown.png"/>
      </div>
      <Container>
        <Burger />
      </Container>
      <Right>
        <MenuItem>Made in India</MenuItem>
          <Imge src="https://cdn.discordapp.com/attachments/891025496601661504/994337086209527960/9-2-india-flag-picture.png"/>
      </Right>
    </Nav>
  )
}

export default Navbar
