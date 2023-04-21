import React from 'react'

export function Description() {
  const [description, setDescription] = React.useState('')

  function handleInputChange(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setDescription(event.target.value)
  }

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md border">
      <div className="mt-3 text-center">
        <h3 className="text-lg font-medium text-red-500 text-me-colorprimary">
          Description
        </h3>
        <p className="mt-2 text-sm text-black-900 text-me-white">
          {description}
        </p>
      </div>
      <textarea
        className="mt-4 px-3 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-me-background text-me-white"
        id="description"
        style={{ resize: 'none' }}
        value={description}
        onChange={handleInputChange}
        placeholder="Enter your description here"
      />
    </div>
  )
}
