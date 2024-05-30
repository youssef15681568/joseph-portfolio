import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import AboutMe from './aboutMe.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar />
      <Hero className = "mt-20"/>
      <Content/>
      <AboutMe/>
      <Footer/>

  </React.StrictMode>,
)
