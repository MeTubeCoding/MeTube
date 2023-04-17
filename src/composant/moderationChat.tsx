import React, { useState, useEffect, useRef } from "react"

interface Message {
	id: string
	pseudo: string
	message: string
}

export function ModerationChat() {
	const [messages, setMessages] = useState<Message[]>([])
	const invisibleButtonRef = useRef<HTMLButtonElement>(null)
	const [filteredMessages, setFilteredMessages] = useState<Message[]>([])

	useEffect(() => {
		getChat()
		const interval = setInterval(() => {
			getChat()
		}, 5000)

		// Cleanup function to clear the interval when the component unmounts
		return () => clearInterval(interval)
	}, [])

	function getChat() {
		fetch("http://127.0.0.1:5600/moderation", {
			method: "GET",
		})
			.then((res) => {
				return res.json()
			})
			.then((res) => {
				console.log(res)
				const section = document.getElementById("espace-Moderation") as HTMLInputElement
				section.innerHTML = ""
				res.forEach((message: { message: string; pseudo: string }) => {
					const text = `${message.pseudo}: ${message.message}`
					const p = document.createElement("p")
					p.textContent = text
					section.appendChild(p)
				})
			})
	}

	function fetchMessages() {
		fetch("http://127.0.0.1:5600/moderation", {
			method: "GET",
		})
			.then((res) => {
				return res.json()
			})
			.then((res) => {
				console.log(res)
				setMessages(res)
			})
	}

	function handleInvisibleButtonClick() {
		fetchMessages()
	}
	return (
		<div className='height: 300px;overflow-y: scroll;border: 1px solid #ccc;padding: 10px;'>
			<section id="espace-Moderation"></section>
			<form className='margin-top: 10px;'>
				<label htmlFor='message-input'>Espace Modération:</label>
				<button
					ref={invisibleButtonRef}
					onClick={handleInvisibleButtonClick}
					style={{ display: "none" }}
				></button>
			</form>
		</div>
	)
}
