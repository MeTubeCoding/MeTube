import React, { useEffect, useState } from "react"
// import { ModerationChat } from "./ModerationChat"


interface Message {
	id: string
	pseudo: string
	message: string
}

export function Chat() {
	const [messages, setMessages] = useState<Message[]>([])
	const [filteredMessages, setFilteredMessages] = useState<Message[]>([])
	useEffect(() => {
		fetchMessages()
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
				const section = document.querySelector("section") as HTMLInputElement
				section.innerHTML = ""
				res.forEach((message: { message: string; pseudo: string }) => {
					const text = `${message.pseudo}: ${message.message}`
					const p = document.createElement("p")
					p.textContent = text
					section.appendChild(p)
				})
			})
	}

	return (
		<>
			<div className='height: 300px;overflow-y: scroll;border: 1px solid #ccc;padding: 10px;'>
				<section></section>

        <form className='margin-top: 10px;'>
          <label htmlFor='message-input'>Message:</label>
          <input
            type='text'
            name='message'
            id='message-input'
            className='width: 80%;padding: 10px;border: 1px solid #ccc;border-radius: 3px;'
          ></input>
          <p onClick={log}>send</p>

					<p onClick={getChat}>chat</p>
				</form>
			</div>

		</>
	)
}
