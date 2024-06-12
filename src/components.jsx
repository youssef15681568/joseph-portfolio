import React from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import AboutMe from './aboutMe.jsx'

import {Route,Routes} from 'react-router-dom'

export default function Components(){

	return(
		<>

			<Navbar />
	      	<Hero className = "mt-20"/>
	      	<Content/>
	      	<AboutMe/>
	      	<Footer/>
      	</>

	)
}