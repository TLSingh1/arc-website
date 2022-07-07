import React from 'react'

import About from './container/About/About'
import Footer from './container/Footer/Footer'
import Header from './container/Header/Header'
import Testimonial from './container/Testimonial/Testimonial'
import Work from './container/Work/Work'
import Blog from './container/Blog/Blog'

import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Testimonial />
      <Footer />
      <Blog />
    </div>
  )
}

export default App