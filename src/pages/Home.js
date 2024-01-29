import React from 'react'
// import { StickyNavbar } from '../components/shared/Navbar'
// import Header from "../components/shared/Navbar"
import Navbar from "../components/shared/Navbar"
import Banner from "../components/individual/Banner"
import Photo from "../components/individual/Photo"
import About from '../components/individual/About'
import Services from '../components/individual/Services'

const Home = () => {
  return (
    <div className="mt-4 mx-auto">
       {/* <Header/>*/}\
        <Navbar/>
        <Banner/>
        <Photo/>
        <About/>
        <Services/>
    </div>
  )
}

export default Home

