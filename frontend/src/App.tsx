import React from 'react'
import './index.css'
import Main from './pages/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'
import ProfilePage from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'
import HomePage from './pages/HomePage'
import Live from './composant/Live'

function App() {
  return (
    <div className="min-h-full h-screen flex">
      <div className="w-full space-y-8">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/live" element={<Live />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App