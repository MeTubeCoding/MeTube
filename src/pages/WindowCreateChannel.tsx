import React from 'react'
import { useState } from 'react'

const WindowCreateChannel = () => {
  return (
    <body className="bg-gray-100">
      <header className="bg-yt-bg-primary bg-red-600 flex justify-between items-center p-2 md:p-3">
        <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold">
          My Account
        </h2>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm md:text-base font-medium">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="block md:hidden focus:outline-none"
          aria-label="Menu"
        >
          <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </header>

      <div className="container mx-auto py-20">
        <h1 className="text-4xl text-center font-bold mb-8">
          Welcome to MeTube
        </h1>
        <p className="text-center text-gray-500 mb-8">
          The most popular video platform in the world.
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Create my channel
          </a>
        </div>
      </div>
    </body>
  )
}

export default WindowCreateChannel
