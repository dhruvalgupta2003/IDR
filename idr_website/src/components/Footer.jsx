import { Facebook, LinkedIn , Instagram, MailOutline, Room, Phone} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import CopyrightIcon from '@mui/icons-material/Copyright';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { mobile4 } from '../responsive';
const Container =styled.div`
display:flex;


background-color:black;
flex-direction:column;
${mobile({fontSize:"90%"})}
`

const Left =styled.div`
color:white;
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`


margin:20px 20px;
color:lightgray;
font-size:15px;
display:flex;
align-items:center;
text-align:center;
font-weight:400;
${mobile({display:"flex",justifyContent:"center"})}
${mobile4({fontSize:"14px"})}
${mobile4({fontSize:"13px"})}



`

const SocialContainer = styled.h1`
display:flex;
`
const SocialIcon = styled.div`
color:white;
width:40px;
height:40px;
border-radius:50%;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
margin-right:20px;
transition: all 0.5s ease;
&:hover{
    transition: all 0.5s ease;
    transform: scale(1.2);
}
  
  
`

const Center =styled.div`
color:white;
flex:1;
padding:20px;



`
const Title = styled.h3`
margin-bottom:30px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
// flex-wrap:wrap;
flex-direction:column;

`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;

`
const Right =styled.div
`
color:white;
flex:1;
padding:20px;
${mobile({backgroundColor: "black"})}

`
const Rightest =  styled.div`
flex=1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
${mobile({display:"flex",flexDirection:"row"})}
`
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;

`
const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;

`

const Logoimg1 = styled.img`
width:70%;

${mobile({width:"50%"})}

`
const Footer = () => {
  return (
    <Container>
        <Wrapper>
    <Left>
        <Logo>IDR</Logo>
        <List>
            <ListItem>About Us</ListItem>
            <ListItem>Contact Us</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Terms & Condition</ListItem>
            
            
        </List>
        
        {/* <Desc>We sell world class fashion products, mIllions of costumer believe in us and we have satisfied all of them. Our company deals with one of the finest quality of clothes and we do it in an impeccable way.</Desc> */}
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color='E4405F'>
                <Instagram/>
            </SocialIcon>
            <SocialIcon color='55ACEE'>
                <LinkedIn/>
            </SocialIcon>
            
        </SocialContainer>
        
    </Left>
    <Center>
        <Logo>Services</Logo>
        <List>
            <ListItem>Drones</ListItem>
            <ListItem>Uavs</ListItem>
            <ListItem>3D Printing</ListItem>
            <ListItem>Military Drones</ListItem>
            
        </List>
        
        

    </Center>
    <Right>
        <Logo>Contact</Logo>
        <ContactItem>

          <Room style={{marginRight:"10px"}}/> Plot no-19, Knowledge Park-II,
Greater Noida, Uttar Pradesh-201306
        </ContactItem>
        <ContactItem>
           <Phone style={{marginRight:"10px"}}/>+91-7827479788
        </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight:"10px"}}/> indiandefencereforms@gmail.com
        </ContactItem>
        
    </Right>
    <Rightest>
    <Logoimg1 src='https://cdn.discordapp.com/attachments/891025496601661504/994984771685990400/unknown.png'/>
    <Logoimg1 src='https://cdn.discordapp.com/attachments/891025496601661504/994986042962755676/unknown.png'/>
    </Rightest>
    
    </Wrapper>
    <Desc>2022 <CopyrightIcon />All Rights Reserved By IndianDefenceReforms</Desc>
    </Container>
    

  );
};

export default Footer;
