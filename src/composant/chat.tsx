import React, { useEffect, useRef, useState } from "react"

interface Message {
	id: string
	pseudo: string
	message: string
}

export function Chat() {
	const [messages, setMessages] = useState<Message[]>([])
	const invisibleButtonRef = useRef<HTMLButtonElement>(null)
	const [filteredMessages, setFilteredMessages] = useState<Message[]>([])
	const motsInterdit = [
		"ta race",
		"chatte",
		"couille",
		"couille",
		"bite",
		"zizi",
		"nique ta mère",
		"merde",
		"imbécile",
		"bordel",
		"enfoiré",
		"connard",
		"bouffon",
		"boloss",
		"abrutti",
		"salope",
		"pd",
		"fdp",
		"ta grand mère la pute",
		"fils de pute",
		"negro",
		"nigger",
		"hitler",
		"staline",
		"nique la coding",
		"fuck",
		"test",
		"pute",
		"gay",
	]
	useEffect(() => {
		const interval = setInterval(() => {
			getChat()
		}, 6000)

		// Cleanup function to clear the interval when the component unmounts
		return () => clearInterval(interval)
	}, [])

	function log() {
		console.log("log")
		const message = document.getElementById("message-input") as HTMLInputElement
		const local = {
			message: message.value,
			pseudo: "Tristan",
		}
		fetch("http://127.0.0.1:5600/chat", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(local),
		})
			.then((res) => {
				return res.text()
			})
			.then((res) => {
				console.log(res)
			})
	}

	function logModeration() {
		console.log("log Modération")
		const message = document.getElementById("message-input") as HTMLInputElement
		const local = {
			message: message.value,
			pseudo: "Tristan",
		}
		fetch("http://127.0.0.1:5600/moderation", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(local),
		})
			.then((res) => {
				return res.text()
			})
			.then((res) => {
				console.log(res)
			})
	}

	function verify() {
		console.log("verify")
		const messageInput = document.getElementById(
			"message-input"
		) as HTMLInputElement
		const messageText = messageInput.value
		const hasForbiddenWord = motsInterdit.some((word) =>
			messageText.toLowerCase().includes(word.toLowerCase())
		)

		if (hasForbiddenWord) {
			logModeration()
		} else {
			log()
		}
	}

	function fetchMessages() {
		fetch("http://127.0.0.1:5600/chat", {
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

	function getChat() {
		fetch("http://127.0.0.1:5600/chat", {
			method: "GET",
		})
			.then((res) => {
				return res.json()
			})
			.then((res) => {
				console.log(res)
				const section = document.getElementById("Chat") as HTMLInputElement
				section.innerHTML = ""
				res.forEach((message: { message: string; pseudo: string }) => {
					const text = `${message.pseudo}: ${message.message}`
					const p = document.createElement("p")
					p.textContent = text
					section.appendChild(p)
				})
			})
	}

	function handleInvisibleButtonClick() {
		fetchMessages()
	}
	return (
		<>
			<div className='height: 300px;overflow-y: scroll;border: 1px solid #ccc;padding: 10px;'>
				<section id="Chat"></section>
				<form className='margin-top: 10px;'>
					<label htmlFor='message-input'>Message:</label>
					<input
						type='text'
						name='message'
						id='message-input'
						className='width: 80%;padding: 10px;border: 1px solid #ccc;border-radius: 3px;'
					></input>
					<p onClick={verify}>send</p> {/* Change this line */}
					<p onClick={getChat}>chat</p>
					<button
						ref={invisibleButtonRef}
						onClick={handleInvisibleButtonClick}
						style={{ display: "none" }}
					></button>
				</form>
			</div>
		</>
	)
}
