import React, { useState, useEffect, useRef } from 'react'
import authenticateUser from '../components/Login'

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

	return () => clearInterval(interval)
  }, [])

  function getChat() {
    fetch('http://127.0.0.1:5600/moderation', {
      method: 'GET'
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        setMessages(res)
      })
  }

  function fetchMessages() {
    fetch('http://127.0.0.1:5600/moderation', {
      method: 'GET'
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        setMessages(res)
      })
  }

  function handleInvisibleButtonClick() {
    fetchMessages()
  }

  /*function Ban(pseudo: string) {
    fetch('http://127.0.0.1:5600/ban', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pseudo })
    })
      .then(res => {
        if (res.ok) {
          setFilteredMessages(messages.filter(msg => msg.pseudo !== pseudo))
        }
        return res.json()
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
	if (event.key === "Enter") {
		event.preventDefault()
		// eslint-disable-next-line @typescript-eslint/no-empty-function

	}
}
*/
function banUser(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
	event.preventDefault()
	const messageInput = document.getElementById("message-input") as HTMLInputElement
	const pseudo = messageInput.value

	fetch("http://127.0.0.1:5600/ban", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ pseudo }),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data)
			messageInput.value = ""
			getChat()
		})
		.catch((error) => console.error(error))
}

  return (
    <div className="h-300 border border-gray-300 p-10 bg-me-background rounded-xl">
      <form className="margin-top: 10px;">
        <label
          htmlFor="message-input"
          className="px-4 py-2 rounded-md bg-me-colorprimary text-me-white font-bold"
        >
          Espace Modération :
        </label>
        <section id="espace-Moderation" className="text-white mt-3">
          {messages.map(msg => (
            <div key={msg.id}>
              <p className="text-me-white">
                {msg.pseudo}: {msg.message}
              </p>
              <button onClick={() => Ban(msg.pseudo)}>Bannir</button>
            </div>
          ))}
        </section>
      </form>
      <button
        ref={invisibleButtonRef}
        onClick={handleInvisibleButtonClick}
        style={{ display: 'none' }}
      ></button>
    </div>
  )
}
