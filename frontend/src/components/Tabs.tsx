/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

function Tabs() {
  const [activeTab, setActiveTab] = useState('Accueil')

  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName)
  }

  return (
    <nav className="flex space-x-12 ml-80 mr-80 mb-12 mt-8">
      <Link
        to="/Accueil"
        className="text-gray-700 hover:text-black font-medium"
      >
        ACCUEIL
      </Link>
      <Link to="/videos" className="text-gray-700 hover:text-black font-medium">
        VIDEOS
      </Link>
      <Link to="/Live" className="text-gray-700 hover:text-black font-medium">
        EN DIRECT
      </Link>
    </nav>
  )
}

export default Tabs
