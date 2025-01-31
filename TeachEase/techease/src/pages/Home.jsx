import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Programs from '../components/programs'
import AboutUs from '../components/Home/aboutUs'

function Home() {
  return (
  <>
  <div className='w-100 min-h-screen  flex flex-col'>
    <div className='absolute w-full top-8 rounded-sm'>
    <Navbar/>

    </div>
 
  <Hero/>
  <Programs/>
  <AboutUs/>
  <Footer/>

  </div>


  </>
  )
}

export default Home