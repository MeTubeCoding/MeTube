/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react'
import './index.css'
import Main from './pages/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'
import ProfilePage from './pages/Profile'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

const App: React.FC = () => {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/:id' element={<h1>Page Résultats</h1>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
