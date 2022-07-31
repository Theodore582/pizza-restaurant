import React from 'react'
import About from '../About/About'
import Findus from '../Find Us/Findus'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Menu from '../Menu/Menu'


const HomePage = () => {
  return (
    <div>
        <Header />
        <Home />
        <About />
        <Findus />
        <Menu />
        <Footer />
    </div>
  )
}

export default HomePage