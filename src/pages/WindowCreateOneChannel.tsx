import React, { useState } from 'react'
import 'tailwindcss/tailwind.css'

const WindowCreateOneChannel = () => {
  const [pseudo, setPseudo] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Ajouter le code pour traiter les données du formulaire
  }

  return (
    <body className="bg-gray-100">
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-medium mb-4">Create a new channel</h2>
          <div className="mb-4">
            <label
              htmlFor="pseudo"
              className="block text-gray-700 font-medium mb-2"
            >
              Channel name :
            </label>
            <input
              type="text"
              id="pseudo"
              name="pseudo"
              value={pseudo}
              onChange={e => {
                setPseudo(e.target.value)
              }}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter the name of your channel"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </body>
  )
}
export default WindowCreateOneChannel
