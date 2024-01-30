import React from 'react'
// import { StickyNavbar } from '../components/shared/Navbar'
// import Header from "../components/shared/Navbar"
import Navbar from "../components/shared/Navbar"
import Banner from "../components/individual/Banner"
import Photo from "../components/individual/Photo"
import About from '../components/individual/About'
import Services from '../components/individual/Services'
import Contact from '../components/individual/Contact'
import Footer from '../components/individual/Footer'

const Home = () => {
  return (
    <div className="mt-4 mx-auto">
       {/* <Header/>*/}\
        <Navbar/>
        <Banner/>
        <Photo/>
        <About/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home

