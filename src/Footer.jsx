import React, {useState, useEffect} from 'react'
import {db, collection, doc, setDoc, serverTimestamp} from './firebaseConfig.js'

export default function Footer(){

	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [success, setSuccess] = useState(false)
	const [cooldown, setCooldown] = useState(false)

	const emailHandler = (e)=>{
		setEmail(e.target.value)
	}
	const messageHandler = (e)=>{
		setMessage(e.target.value)
	}
	

	useEffect(()=>{
		let cooldownTimer;
		if(cooldown){
			cooldownTimer = setTimeout(()=>{ setCooldown(false)},10000)
		}
		return () => clearTimeout(cooldownTimer)
	},[cooldown])

	useEffect(()=>{
		let successTimer
		if(success){
			successTimer = setTimeout(()=> setSuccess(false), 3000)
		}
		return ()=> clearTimeout(successTimer)
	},[success])



	const handleSubmit = async(e)=>{
		e.preventDefault()
		if(cooldown){
			alert('you must wait 10 seconds before sending another message')
			return
		}
		try{
			const docRef = doc(collection(db, 'contacts'), email)
			await setDoc(docRef,{
				email,
				message,
				timestamp: serverTimestamp()
			})
			setSuccess(true)
			setEmail('')
			setMessage('')
			setCooldown(true)

		}catch(e){
			console.error(`the following Error!! occured ${e.message}`)
		}
	}

	return(
		<footer id = "contact-me">
			<div className = "bg-blue-500 h-screen flex flex-col justify-center items-center">
				<div className = "flex flex-col items-center max-sm:flex max-sm:flex-col max-sm:items-center">
					<h1 className = "text-white font-bold text-2xl flex justify-self-center mb-[30px] select-none max-sm:pb-4 max-sm:flex">contact-me (:</h1>
					<section >
						<form className = "flex flex-col items-center p-2" onSubmit = {handleSubmit} method = "post">
							<input type = "text" 
							placeholder = "Email" 
							onChange = {emailHandler} 
							value = {email}
							name = "email"
							className = "mb-2 p-2 min-w-[500px] outline-none max-sm:min-w-[300px] rounded-xl text-[0.9rem] transition-all duration-200 hover:brightness-90 focus:brightness-100"
							></input>
						
						<textarea value = {message} onChange = {messageHandler} placeholder = "message"
						className = "mb-2 p-2 min-w-[500px] max-sm:min-w-[300px] h-[200px] outline-none rounded-l-xl rounded-tr-xl text-[0.9rem] transition-all duration-200 hover:brightness-90 focus:brightness-100"></textarea>
						<div className = "w-full flex flex-col items-center max-sm:items-center">
						<button type = "submit"
							className = "bg-orange-500 rounded-xl flex self-start max-sm:self-center  max-sm:min-w-[300px] p-2 px-4 hover:bg-cyan-500 cursor-pointer transition-colors duration-200 border-transparent border-solid border-2 hover:border-white hover:border-solid hover:border-2 hover:text-white font-bold max-sm:focus:bg-cyan-500 max-sm:flex max-sm:flex-col max-sm:items-center">Send</button>
							<p className = {`text-white p-2 bg-green-500 font-bold rounded-xl w-60 text-center select-none transition-all duration-300 max-sm:mt-2 ${success ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}>message sent successfully!!</p>
							
						</div>
						</form>
						
					</section>
				</div>
			</div>
			

		</footer>

	)
}