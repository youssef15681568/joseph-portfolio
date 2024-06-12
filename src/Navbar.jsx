import React, { useState, useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'


function Navbar(){
  const [toggleMenu, setToggleMenu] = useState(false)
  const [scrollNavbar, setScrollNavbar] = useState(false)
  function handleToggleMenu(){
    setToggleMenu(!toggleMenu)
  }

  if(window.scrollY > 50){
    setScrollNavbar(true)
    
  }
    
  
  const {hash} = useLocation()

  useEffect(()=>{
    if (hash){
      const element = document.querySelector(hash)
      if(element){
        element.scrollIntoView({behavior:'smooth'})
      }
    }
  },[hash])

  return (
    <>
      <div className = {` h-15 flex sm:flex-row sm:justify-between flex-col items-center ${scrollNavbar ? "fixed top-0 left-0 z-100 bg-green-500" : ""}`}>
        <div className = "flex justify-between w-screen items-center">
        <h1 
        className = "flex items-center mx-5 transition-all duration-100 font-bold cursor-pointer text-blue-500 hover:text-orange-500 text-[2rem] sm:text-[1.3rem] py-2 sm:py-0 mt-4"
        
        ><Link to = "#hero">JOSEPH</Link></h1>
        

        <svg viewBox="0 0 100 80" width="40" height="40" 
        className = "fill-blue-500 sm:hidden visible mt-4 mr-5 transition-colors duration-200 active:fill-orange-500"
        onClick = {handleToggleMenu}>
          <rect width="100" height="15" rx="10"></rect>
          <rect y="30" width="100" height="15" rx="10"></rect>
          <rect y="60" width="100" height="15" rx="10"></rect>
        </svg>
        <ul className = "flex flex-row mt-3 sm:visible max-sm:hidden">
                            <li className = "p-5 transition-colors hover:text-blue-500 dutration-200 cursor-pointer sm:text-[0.9rem] text-[1.5rem] border-y-transparent border-y-solid border-y-4 active:border-solid active:border-y-cyan-500 active:border-y-4  w-screen sm:w-auto sm:active:border-transparent text-center"><Link to = "#hero">home</Link></li>
                            <li className = "p-5 transition-all hover:text-blue-500 dutration-200 cursor-pointer sm:text-[0.9rem] text-[1.5rem] border-y-transparent border-y-solid border-y-4 active:border-solid active:border-y-cyan-500 active:border-y-4  w-screen sm:w-auto sm:active:border-transparent text-center">
                            <Link to = "#content">skills</Link>
                            </li>
                            <li className = "p-5 transition-all hover:text-blue-500 dutration-200 cursor-pointer sm:text-[0.9rem] text-[1.5rem] border-y-transparent border-y-solid border-y-4 active:border-solid active:border-y-cyan-500 active:border-y-4  w-screen sm:w-auto sm:active:border-transparent text-center"><Link to = "#about-me">about</Link></li>
                            <li className = "hover:text-slate-600 bg-gradient-to-l hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-[0.9rem] font-bold text-white rounded-full cursor-pointer flex items-center text-[0.9rem] w-[125px] h-10 self-center text-nowrap py-[5px] px-2 justify-center mt-0 transition-all dutration-300 mx-5 mb-0">
                            <Link to = "#contact-me">contact-me</Link>
                            </li>
                        </ul>
        </div>
        <ul className = {`flex flex-col items-center mt-3 sm:hidden transition-all duration-300 ${toggleMenu ? "h-[290px]" : "h-[0]"}`}>
              <li className = "p-5 transition-colors active:text-white dutration-200 cursor-pointer sm:text-[0.9rem] text-[1.5rem] active:bg-blue-200  w-screen sm:w-auto sm:active:border-transparent text-center"><a href = "#">home</a></li>
              <li className = "p-5 transition-all active:text-white dutration-200 cursor-pointer sm:text-[0.9rem] text-[1.5rem] active:bg-blue-200  w-screen sm:w-auto sm:active:border-transparent text-center"><a href = "#projects">skills</a></li>
              <li className = "p-5 transition-all active:text-white dutration-200 cursor-pointer sm:text-[0.9rem] text-[1.5rem] active:bg-blue-200  w-screen sm:w-auto sm:active:border-transparent text-center"><a href = "#aboutMe">about</a></li>
              <li className = {`p-5 active:text-slate-600 bg-gradient-to-l hover:bg-gradient-to-r from-cyan-500 to-blue-500 sm:text-[0.9rem] text-[1.5rem] font-bold text-white hover:bg-white sm:rounded-full cursor-pointer flex items-center text-[0.9rem] w-screen sm:w-[125px]  text-nowrap  sm:py-2 py-[10px] sm:px-2 px-40 justify-center mt-0 sm:mt-0 transition-all dutration-300 mx-5 mb-0 ${toggleMenu ? "duration-500 scale-x-100" : "duration-500 scale-x-0"}`}>
                <Link to = "#contact-me">contact-me</Link>
              </li>
        </ul>
        
                
      </div>
    </>
  )
}

export default Navbar
