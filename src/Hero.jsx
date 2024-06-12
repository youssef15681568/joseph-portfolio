import React, {useState} from 'react'

export default function Hero(){
	

	return(
		<div id = "hero" className = "sm:h-screen relative flex flex-col-reverse sm:flex-row justify-around items-center mt-2 sm:mt-40">
			<div className = "select-none sm:relative absolute ">
				<p className = "text-[1.6rem] font-extrabold text-orange-500 pl-10"> >>Hi there !</p>
				<div className = "flex items-end">
					<p className = "pr-5 text-[1.5rem] font-bold sm:mb-5 mb-2 text-white sm:text-black pl-10">I'm </p>
					<h1 className = "
					sm:text-[5rem] text-[3rem] font-extrabold
					sm:bg-gradient-to-r sm:from-orange-500 sm:to-blue-500
					sm:text-transparent
					text-white
					bg-clip-text"
					>Joseph</h1>
				</div>

				<h1 className = "
				sm:text-[4rem] text-[3rem] font-extrabold text-nowrap
				sm:bg-gradient-to-l sm:from-orange-500 sm:to-blue-500
				sm:text-transparent
				text-white
				bg-clip-text pl-10">EL MEMOUNI</h1>


				<div className = " mt-5 backdrop-blur hover:bg-cyan-500/10 sm:bg-blue-500/10 sm:w-screen sm:rounded-xl border-y-solid border-y-white border-y-2 font-bold text-white sm:text-black text-[1.5rem] max-w-[40rem] flex items-center flex-wrap justify-left">
					<p className = "px-6 py-3">I'm a self-taught <span className = "text-blue-500">Web Developper</span>, <span className = "text-orange-500">Graphic Designer</span> and <span className = "text-cyan-500">Video Editor</span></p> 
					
					
				</div>
				<h3 className = "font-bold mt-6 text-[1.3rem] text-blue-500 pl-10">Welcome to my profile ( :</h3>
				<div className = "sm:w-auto sm:justify-start w-screen flex justify-center sm:justify-end sm:mr-10">
					<button className = "bg-gradient-to-r flex from-cyan-500 to-blue-500 hover:bg-gradient-to-l transition-all duration-200 text-white font-bold p-3 px-10 text-nowrap rounded-full sm:mt-10 mt-10 sm:ml-10 hover:text-slate-600"><a href = "#projects">see projects</a></button>
				</div>
			</div>
			{/* <div className = "w-20 h-20 object-cover rounded-full  */}
			{/* bg-[url('https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=400')] */}
			{/* bg-cover */}
			{/* border-blue-500 border-solid border-4 hover:border-2 cursor-pointer */}
			{/* transition-all duration-200 ease-in-out"> */}
			{/* 	 */}
			{/* </div> */}
			<div>
				<img 
				className = "
				sm:max-w-[30rem] w-screen h-[40rem]
				object-cover
				sm:rounded-xl 
				hover:shadow-2xl
				sm:border-solid sm:border-blue-500 sm:border-2
				transitio-all duration-200
				saturate-50
				max-sm:filter-none
				hover:saturate-100
				"
				src = "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=400" 
				alt = ""/>
			</div>
			
		</div>
	)
}