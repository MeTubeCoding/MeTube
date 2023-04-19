import React, { useEffect, useRef, useState } from 'react'

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
    'ta race',
    'chatte',
    'couille',
    'couille',
    'bite',
    'zizi',
    'nique ta mère',
    'merde',
    'imbécile',
    'bordel',
    'enfoiré',
    'connard',
    'bouffon',
    'boloss',
    'abrutti',
    'salope',
    'pd',
    'fdp',
    'ta grand mère la pute',
    'fils de pute',
    'negro',
    'nigger',
    'hitler',
    'staline',
    'nique la coding',
    'fuck',
    'test',
    'pute'
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      getChat()
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  function log() {
    console.log('log')
    const message = document.getElementById('message-input') as HTMLInputElement
    const local = {
      message: message.value,
      pseudo: 'Tristan'
    }
    fetch('http://127.0.0.1:5600/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(local)
    })
      .then(res => {
        return res.text()
      })
      .then(res => {
        console.log(res)
      })
  }

  function logModeration() {
    console.log('log Modération')
    const message = document.getElementById('message-input') as HTMLInputElement
    const local = {
      message: message.value,
      pseudo: 'Tristan'
    }
    fetch('http://127.0.0.1:5600/moderation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(local)
    })
      .then(res => {
        return res.text()
      })
      .then(res => {
        console.log(res)
      })
  }

  function verify(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()
    console.log('verify')
    const messageInput = document.getElementById(
      'message-input'
    ) as HTMLInputElement
    const messageText = messageInput.value
    const hasForbiddenWord = motsInterdit.some(word =>
      messageText.toLowerCase().includes(word.toLowerCase())
    )

    if (hasForbiddenWord) {
      logModeration()
      resetInput()
    } else {
      log()
      resetInput()
    }
  }

  function fetchMessages() {
    fetch('http://127.0.0.1:5600/chat', {
      method: 'GET'
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log(res)
        setMessages(res)
      })
  }

  function getChat() {
    fetch('http://127.0.0.1:5600/chat', {
      method: 'GET'
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log(res)
        const section = document.getElementById('Chat') as HTMLInputElement
        section.innerHTML = ''
        res.forEach((message: { message: string; pseudo: string }) => {
          const text = `${message.pseudo}: ${message.message}`
          const p = document.createElement('p')
          p.textContent = text
          section.appendChild(p)
        })
      })
  }

  function handleInvisibleButtonClick() {
    fetchMessages()
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      verify({
        preventDefault: () => {
          event.preventDefault()
        }
      } as React.MouseEvent<HTMLButtonElement, MouseEvent>)
      resetInput()
    }
  }

  function resetInput() {
    const messageInput = document.getElementById(
      'message-input'
    ) as HTMLInputElement
    messageInput.value = ''
  }

  return (
    <>
      <div className="h-300 overflow-y-scroll border border-gray-300 p-10 bg-me-background rounded-xl">
        <section id="Chat" className="text-me-white"></section>
        <form className="mt-10 flex flex-col justify-end">
          <label
            htmlFor="message-input"
            className="text-me-colorprimary font-bold"
          >
            Message:
          </label>
          <input
            type="text"
            name="message"
            id="message-input"
            className="border border-gray-300 rounded-md bg-me-background text-me-white"
            onKeyPress={handleKeyPress}
          ></input>
          <button
            onClick={event => verify(event)}
            className="bg-me-colorprimary font-bold mt-2 rounded-md"
          >
            Send
          </button>
          <button
            ref={invisibleButtonRef}
            onClick={handleInvisibleButtonClick}
            style={{ display: 'none' }}
          ></button>
        </form>
      </div>
    </>
  )
}
