import React from 'react'
import AboutComnonent2 from '../components/AboutComnonent2'
import AboutComponent1 from '../components/AboutComponent1'
// import AboutComponent3 from '../components/AboutComponent3'
import AboutComponent4 from '../components/AboutComponent4'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../Newsletter'
import Navbar from '../components/Navbar'

function About() {
  return (
    <div>
        {/* <Header/> */}
        <Navbar/>
        <AboutComponent1 />
        <AboutComnonent2 />
        {/* <AboutComponent3 /> */}
        <AboutComponent4 />
        <Newsletter/>
        <Footer />



    </div>
  )
}

export default About