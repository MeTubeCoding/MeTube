import React from 'react'

export function Titre() {
  const [titre, settitre] = React.useState('')

  function handleInputChange(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    settitre(event.target.value)
  }
  function post() {
    console.log('log')
    const message = document.getElementById('titre') as HTMLInputElement
    const local = {
      description: message.value,
      live: 'Zerator'
    }
    fetch('http://127.0.0.1:5600/titre', {
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

  return (
    <div className="p-4 max-w-full mx-auto bg-white rounded-xl shadow-md border h-auto">
      <div className="mt-3 text-center">
        <h3 className="text-lg font-medium text-red-500 text-me-colorprimary font-bold">
          Titre
        </h3>
        <p className="mt-2 text-sm text-black-900 text-me-white">{titre}</p>
      </div>
      <textarea
        className="mt-4 px-3 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-me-background text-me-white"
        id="titre"
        style={{ resize: 'none' }}
        value={titre}
        onChange={handleInputChange}
        placeholder="Enter your description here"
      />
    </div>
  )
}
