import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import About from '../components/About'
import Divider from '../assets/Divider'
import Gallery from '../components/Gallery'
import Booking from '../components/Booking'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
<>
<Header></Header>
 <Menu></Menu>
<Divider></Divider>

 <About></About>
 <Divider></Divider>
 <Gallery></Gallery>
 <Divider></Divider>
 <Booking></Booking>
 <Divider></Divider>
 <Contact></Contact>
 <Footer></Footer>
</>
  )
}

export default Home