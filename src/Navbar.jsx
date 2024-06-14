import React, { useState, useEffect } from 'react'

import {Link, Events, animateScroll as scroll, scrollSpy} from "react-scroll"


function Navbar(){
  const [toggleMenu, setToggleMenu] = useState(false)
  const [scrollNavbar, setScrollNavbar] = useState(false)
  function handleToggleMenu(){
    setToggleMenu(!toggleMenu)
  }

  if(window.scrollY > 50){
    setScrollNavbar(true)
    
  }

  useEffect(() => {
    
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
    

  return (
    <>
      <div className = {` h-15 flex sm:flex-row sm:justify-between flex-col items-center ${scrollNavbar ? "fixed top-0 left-0 z-100 bg-green-500" : ""}`}>
        <div className = "flex justify-between w-screen items-center">
        <h1 
        className = "flex items-center mx-5 transition-all duration-100 font-bold cursor-pointer text-blue-500 hover:text-orange-500 text-[2rem] sm:text-[1.3rem] py-2 sm:py-0 mt-4"
        
        ><Link to = "hero" spy = {true} duration = {500}>YOUSSEF</Link></h1>
        

        <svg viewBox="0 0 100 80" width="40" height="40" 
        className = "fill-blue-500 sm:hidden visible mt-4 mr-5 transition-colors duration-200 active:fill-orange-500"
        onClick = {handleToggleMenu}>
          <rect width="100" height="15" rx="10"></rect>
          <rect y="30" width="100" height="15" rx="10"></rect>
          <rect y="60" width="100" height="15" rx="10"></rect>
        </svg>
        <ul className = "flex flex-row mt-3 sm:visible max-sm:hidden">
                            <li className = "p-5 transition-colors hover:text-blue-500 dutration-200 cursor-pointer sm:text-[0.9rem] text-[1.5rem] border-y-transparent border-y-solid border-y-4 active:border-solid active:border-y-cyan-500 active:border-y-4  w-screen sm:w-auto sm:active:border-transparent text-center"><Link to = "hero" spy = {true} duration = {500}>home</Link></li>
                            <li className = "p-5 transition-all hover:text-blue-500 dutration-200 cursor-pointer sm:text-[0.9rem] text-[1.5rem] border-y-transparent border-y-solid border-y-4 active:border-solid active:border-y-cyan-500 active:border-y-4  w-screen sm:w-auto sm:active:border-transparent text-center">
                            <Link to = "content" spy = {true} duration = {500}>skills</Link>
                            </li>
                            <li className = "p-5 transition-all hover:text-blue-500 dutration-200 cursor-pointer sm:text-[0.9rem] text-[1.5rem] border-y-transparent border-y-solid border-y-4 active:border-solid active:border-y-cyan-500 active:border-y-4  w-screen sm:w-auto sm:active:border-transparent text-center"><Link to = "about-me" spy = {true} duration = {500}>about</Link></li>
                            <li className = "hover:text-slate-600 bg-gradient-to-l hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-[0.9rem] font-bold text-white rounded-full cursor-pointer flex items-center text-[0.9rem] w-[125px] h-10 self-center text-nowrap py-[5px] px-2 justify-center mt-0 transition-all dutration-300 mx-5 mb-0">
                            <Link to = "contact-me" spy = {true} duration = {500}>contact-me</Link>
                            </li>
                        </ul>
        </div>
        <ul className = {`flex flex-col items-center mt-3 sm:hidden transition-all duration-300 ${toggleMenu ? "h-[290px]" : "h-[0]"}`}>
              <li className = "p-5 transition-colors active:text-white dutration-200 cursor-pointer sm:text-[0.9rem] text-[1.5rem] active:bg-blue-200  w-screen sm:w-auto sm:active:border-transparent text-center"><Link to = "hero" spy = {true} duration = {500}>home</Link></li>
              <li className = "p-5 transition-all active:text-white dutration-200 cursor-pointer sm:text-[0.9rem] text-[1.5rem] active:bg-blue-200  w-screen sm:w-auto sm:active:border-transparent text-center"><Link to = "content" spy = {true} duration = {500}>skills</Link></li>
              <li className = "p-5 transition-all active:text-white dutration-200 cursor-pointer sm:text-[0.9rem] text-[1.5rem] active:bg-blue-200  w-screen sm:w-auto sm:active:border-transparent text-center"><Link to = "about-me" spy = {true} duration = {500}>about</Link></li>
              <li className = {`p-5 active:text-slate-600 bg-gradient-to-l hover:bg-gradient-to-r from-cyan-500 to-blue-500 sm:text-[0.9rem] text-[1.5rem] font-bold text-white hover:bg-white sm:rounded-full cursor-pointer flex items-center text-[0.9rem] w-screen sm:w-[125px]  text-nowrap  sm:py-2 py-[10px] sm:px-2 px-40 justify-center mt-0 sm:mt-0 transition-all dutration-300 mx-5 mb-0 ${toggleMenu ? "duration-500 scale-x-100" : "duration-500 scale-x-0"}`}>
                <Link to = "contact-me" spy = {true} duration = {500}>contact-me</Link>
              </li>
        </ul>
        
                
      </div>
    </>
  )
}

export default Navbar
