import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`

  list-style: none;
  display: flex;
  margin-left:100px;
    
  flex-flow: row nowrap;

  li {
    color:white;
    width:100%;
    
    padding: 18px 20px;

  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    z-index:1;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    
    transition: transform 0.3s ease-in-out;

    li {
      color: white;
      text-decoration:none;
    }
  }
`;
const Part1 = styled.span`
`
const Part2 = styled.span``
const Part3 = styled.span``
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/"style= { { textDecoration: 'none' }}><Part1><li>Home</li></Part1></Link>
      <Link to="/about" style= { { textDecoration: 'none' }}><Part2><li>About Us</li></Part2></Link>
      <Part3><li>Product</li></Part3>
      <Link to="/contact" style= { { textDecoration: 'none' }}><Part3><li>Contact Us</li></Part3></Link>
      {/* <li>Sign In</li>
      <li>Sign Up</li> */}
    </Ul>
  )
}

export default RightNav
