import React, {useState} from 'react'


export default function Content(){

	const [webdev, setWebdev] = useState(false)
	function handleWebdev(){
		setWebdev(!webdev)
	}

	const [graphicDesign, setGraphicDesign] = useState(false)
	function handleGraphicDesign(){
		setGraphicDesign(!graphicDesign)
	}

	const [videoEditing, setVideoEditing] = useState(false)
	function handleVideoEditing(){
		setVideoEditing(!videoEditing)
	}
	return(
		<div id = "content">
			<div>
				<h3 className = "font-bold text-white sm:mt-20 mt-2 text-[1.5rem] bg-slate-500 w-screen h-20 flex items-center justify-center border-b-slate-700 border-b-solid border-b-4 select-none" >Skills</h3>
			</div>
			<h3 className = "font-bold text-white cursor-pointer flex justify-center items-center bg-blue-500 w-screen h-10 hover:bg-blue-700 select-none
			border-b-transparent border-b-solid border-b-2 hover:border-b-solid hover:border-b-white hover:border-b-2 transition-all duration-200"
			onClick = {handleWebdev}
			>web developpement</h3>


			<div className = {`grid grid-cols-3 gap-2 max-sm:flex max-sm:flex-col max-sm:items-center bg-blue-800 transition-all duration-300 ${webdev ? "h-dvh" : "h-[0px]"}`}>
				<section className = {`bg-slate-800 rounded-xl h-60 flex flex-col items-center justify-start p-3 m-5 font-bold w-[22rem]
				border-transparent border-solid border-2 hover:border-solid hover:border-white hover:border-2 transition-all duration-200
				${webdev ? "scale-100" : "scale-0"}`}>
					<img src = "/joseph-portfolio/images/html.png" width = "60"/>
					<p className = "text-justify w-60 mt-7 font-normal text-white">I’m confident in my skills and can easily write <b className = "text-orange-500">HTML</b> code for any project.</p>
				</section>
				
				<section className = {`bg-slate-800 rounded-xl h-60 flex flex-col items-center justify-start p-3 m-5 font-bold w-[22rem]
				border-transparent border-solid border-2 hover:border-solid hover:border-white hover:border-2 transition-all duration-200
				${webdev ? "scale-100" : "scale-0"}`}>
					<img src = "/joseph-portfolio/images/css.png" width = "60"/>
					<p className = "text-justify w-60 mt-7 text-white font-normal">I have a solid grasp of <b className = "text-blue-500">CSS</b> and <b className = "text-blue-500">TailwindCSS</b>, and can efficiently style any project.</p>
				</section>


				<section className = {`bg-slate-800 rounded-xl h-60 flex flex-col items-center justify-start p-3 m-5 font-bold w-[22rem]
				border-transparent border-solid border-2 hover:border-solid hover:border-white hover:border-2 transition-all duration-200
				${webdev ? "scale-100" : "scale-0"}`}>
					<img src = "/joseph-portfolio/images/js.png" width = "60"/>
					<p className = "text-justify w-60 mt-7 font-normal text-white">I'm proficient in <b className = "text-yellow-500">JavaScript</b> and can seamlessly write and debug code for any application.</p>
				</section>


				<section className = {`bg-slate-800 rounded-xl h-60 flex flex-col items-center justify-start p-3 m-5 font-bold w-[22rem]
				border-transparent border-solid border-2 hover:border-solid hover:border-white hover:border-2 transition-all duration-200
				${webdev ? "scale-100" : "scale-0"}`}>
					<img src = "/joseph-portfolio/images/react.png" width = "60"/>
					<p className = "text-justify w-60 mt-7 font-normal text-white">I have a strong understanding of <b className = "text-cyan-500">React</b> and can effortlessly build dynamic web apps.</p>
				</section>

			</div>


			<h3 className = "font-bold text-white cursor-pointer flex justify-center items-center bg-orange-500 w-screen h-10 hover:bg-orange-700 select-none
			border-b-transparent border-b-solid border-b-2 hover:border-b-solid hover:border-b-white hover:border-b-2 transition-all duration-200"
			onClick = {handleGraphicDesign}>graphic design</h3>
			<div className = {`grid grid-cols-3 gap-2 max-sm:flex max-sm:flex-col max-sm:items-center bg-orange-700 transition-all duration-300 ${graphicDesign ? "h-dvh" : "h-[0px]"}`}>
				<section className = {`bg-slate-800 rounded-xl h-60 flex flex-col items-center justify-start p-3 m-5 font-bold w-[22rem]
				border-transparent border-solid border-2 hover:border-solid hover:border-white hover:border-2 transition-all duration-200
				${graphicDesign ? "scale-100" : "scale-0"}`}>
					<img src = "/joseph-portfolio/images/photoshop.png" width = "60"/>
					<p className = "text-justify w-60 mt-7 font-normal text-white">I'm skilled in <b className = "text-blue-400">Photoshop</b> and can effectively create and edit images for any project.  </p>
				</section>


				<section className = {`bg-slate-800 rounded-xl h-60 flex flex-col items-center justify-start p-3 m-5 font-bold w-[22rem]
				border-transparent border-solid border-2 hover:border-solid hover:border-white hover:border-2 transition-all duration-200
				${graphicDesign ? "scale-100" : "scale-0"}`}>
					<img src = "/joseph-portfolio/images/illustrator.png" width = "60"/>
					<p className = "text-justify w-60 mt-7 font-normal text-white">I have a good command of <b className = "text-orange-400">Illustrator</b> and can proficiently design vector graphics and illustrations.</p>
				</section>


				<section className = {`bg-slate-800 rounded-xl h-60 flex flex-col items-center justify-start p-3 m-5 font-bold w-[22rem]
				border-transparent border-solid border-2 hover:border-solid hover:border-white hover:border-2 transition-all duration-200
				${graphicDesign ? "scale-100" : "scale-0"}`}>
					<img src = "/joseph-portfolio/images/indesign.png" width = "60"/>
					<p className = "text-justify w-60 mt-7 font-normal text-white">I’m experienced with <b className = "text-pink-600">InDesign</b> and can expertly layout and format any print or digital publication.</p>
				</section>

			</div>


			<h3 className = "font-bold text-white cursor-pointer flex justify-center items-center bg-cyan-500 w-screen h-10 hover:bg-cyan-700 select-none
			border-b-transparent border-b-solid border-b-2 hover:border-b-solid hover:border-b-white hover:border-b-2 transition-all duration-200"
			onClick = {handleVideoEditing}>video editing</h3>
			<div className = {`grid grid-cols-3 gap-2 max-sm:flex max-sm:flex-col max-sm:items-center bg-cyan-700 transition-all duration-300 ${videoEditing ? "h-dvh" : "h-[0px]"}`}>
				<section className = {`bg-slate-800 rounded-xl h-60 flex flex-col items-center justify-start p-3 m-5 font-bold w-[22rem]
				border-transparent border-solid border-2 hover:border-solid hover:border-white hover:border-2 transition-all duration-200
				${videoEditing ? "scale-100" : "scale-0"}`}>
					<img src = "/joseph-portfolio/images/afterEffect.png" width = "60"/>
					<p className = "text-justify w-60 mt-7 font-normal text-white">I’m adept at <b className = "text-purple-600">After Effects</b> and can easily create stunning animations and visual effects.</p>
				</section>
				


				<section className = {`bg-slate-800 rounded-xl h-60 flex flex-col items-center justify-start p-3 m-5 font-bold w-[22rem]
				border-transparent border-solid border-2 hover:border-solid hover:border-white hover:border-2 transition-all duration-200
				${videoEditing ? "scale-100" : "scale-0"}`}>
					<img src = "/joseph-portfolio/images/premierePro.png" width = "60"/>
					<p className = "text-justify w-60 mt-7 font-normal text-white">I have extensive knowledge of <b className = "text-purple-600">Premiere Pro</b> and can efficiently edit and produce high-quality videos.</p>
				</section>
			
			</div>
		</div>

	)
}