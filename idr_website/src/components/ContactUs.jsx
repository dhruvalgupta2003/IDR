import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { mobile3 } from '../responsive';
import { mobile4 } from '../responsive';
const Container = styled.div`
background-color:black;
padding:20px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column


`

const Wrapper = styled.div`
// background-color:rgba: (255, 255, 255, 100);
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background: white;
width:50%;
height:50vh;
margin-right:40px;
border-radius:8px;
`
const Heading = styled.h2`
font-size:80px;
// margin-left:auto;
// margin-right:auto;
// margin-top:5%;
background: linear-gradient(186deg, rgba(144,155,132,1) 9%, rgba(138,149,123,1) 14%, rgba(106,115,77,1) 40%, rgba(75,83,32,1) 65%);
;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
${mobile3({fontSize:'60px'})}

`


const Form = styled.form`
margin:40px 0px;
display:flex;
align-items:center;
justify-content:center;
// flex-direction:column;
// background-color:white;
background: #1e1e1e;
height:65vh;
width:60vw;
border-radius:17px;
${mobile3({height:"30vh",width:"35vh" , marginLeft:"auto" , marginRight:"auto" , display:"flex"})}
${mobile4({height:"35vh",width:"35vh" , marginLeft:"auto" , marginRight:"auto" , display:"flex"})}


`
const Image2 = styled.img`
  // height:55%;
  width:50%;
  // margin-left:-4%;
  
  // position:absolute; 
  ${mobile3({display:"none"})}
`
const Input = styled.input`
  font-size: 18px;
  padding: 8px 20px;
  margin:10px 0px;
  display:flex;
  margin-left:auto;
  margin-right:auto;
  // background: #C4C4C4;
  background-color:#1e1e1e;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: white;
  }
  ${mobile3({width:"19vh"})}
`
const Input2 = styled.input`
  font-size: 18px;
  
  padding: 50px 20px;
  margin:10px 0px;
  // background: #C4C4C4;
  background-color:#1e1e1e;
  border: none;
  // width:30%;
  display:flex;
  margin-left:auto;
  margin-right:auto;
  border-radius: 5px;
  ::placeholder {
    color: white;
  }
  ${mobile3({width:"19vh"})}
`
const Button = styled.button`
  width:100px;
  height:20px;
  background-color: #3695ED;
  // background-color:white;
  font-weight:700;
  border:0px;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  margin-left:50px;
`

const ContactUs = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w1uu05p', 'template_fchiugh', form.current, 'Af3_0D0-0Avq-mRps')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
  return (
        <Container>
          
            <Heading>Contact Us</Heading>
                
           
            <Form ref={form} onSubmit={sendEmail}>
              
                <Image2 src='https://cdn.discordapp.com/attachments/891025496601661504/999908891246731274/unknown.png'/>
                <Wrapper>
                <Input type="text" placeholder='Full Name' name='user_name' required/>
                <Input type="email" placeholder='Email' name='user_email' required/>
                <Input2 type="text-area" placeholder='Message' name='user_message' required/>
                <Button>SUBMIT</Button>
                </Wrapper>
              
            </Form>
            
        </Container>
  )
}

export default ContactUs