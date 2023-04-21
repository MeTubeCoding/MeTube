import React, { useEffect } from 'react'

export function Chat() {
  const motsInterdit = ['test']

  useEffect(() => {
    // getChat()
  })

  function log() {
    console.log('log')
    const message = document.getElementById('message_chat') as HTMLInputElement
    const local = {
      message: message.value,
      pseudo: localStorage.getItem('username')?.replace(/"/g, '') || 'Unknown'
    }
    console.log(local)
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
    const message = document.getElementById('message_chat') as HTMLInputElement
    const local = {
      message: message.value,
      pseudo: localStorage.getItem('username')?.replace(/"/g, '') || 'Unknown'
    }
    console.log(local)
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
      'message_chat'
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

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault()
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      verify({ preventDefault: () => {} } as React.MouseEvent<
        HTMLButtonElement,
        MouseEvent
      >)
    }
  }

  function resetInput() {
    const messageInput = document.getElementById(
      'message_chat'
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
            id="message_chat"
            className="border border-gray-300 rounded-md bg-me-background text-me-white"
            onKeyPress={handleKeyPress}
          ></input>
          <button
            onClick={event => verify(event)}
            className="bg-me-colorprimary font-bold mt-2 rounded-md"
          >
            Send
          </button>
          <p
            onClick={getChat}
            className="bg-me-colorprimary font-bold mt-2 rounded-md"
          >
            Get Chat
          </p>
        </form>
      </div>
    </>
  )
}
