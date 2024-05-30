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
		<footer id = "contactMe">
			<div className = "bg-blue-500 h-60 flex flex-col justify-center">
				<div className = "grid grid-cols-2 items-center max-sm:flex max-sm:flex-col max-sm:items-start max-sm:pl-10">
					<h1 className = "text-white font-bold text-2xl flex justify-self-center select-none max-sm:pb-4 max-sm:flex">contact-me</h1>
					<section >
						<form className = "flex flex-col items-start" onSubmit = {handleSubmit} method = "post">
							<input type = "text" 
							placeholder = "Email" 
							onChange = {emailHandler} 
							value = {email}
							name = "email"
							className = "mb-2 p-2 min-w-[500px] outline-none max-sm:min-w-[300px] rounded-xl text-[0.9rem]"
							></input>
						
						<textarea value = {message} onChange = {messageHandler} placeholder = "message"
						className = "mb-2 p-2 min-w-[500px] max-sm:min-w-[300px] outline-none rounded-l-xl rounded-tr-xl text-[0.9rem]"></textarea>
						<div className = "flex gap-5">
						<button type = "submit"
							className = "bg-orange-500 rounded-xl max-sm:min-w-[300px] p-2 px-4 hover:bg-cyan-500 cursor-pointer transition-colors duration-200 border-transparent border-solid border-2 hover:border-white hover:border-solid hover:border-2 hover:text-white font-bold max-sm:focus:bg-cyan-500 ">Send</button>
							{success && <p className = "text-white p-2 bg-green-500 font-bold rounded-xl w-60 text-center select-none">message sent successfully!!</p>}
							
						</div>
						</form>
						
					</section>
				</div>
			</div>
			

		</footer>

	)
}