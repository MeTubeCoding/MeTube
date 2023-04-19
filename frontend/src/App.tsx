import React from 'react'
import './index.css'
import Main from './pages/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'
import ProfilePage from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'
<<<<<<< HEAD
import Tendances from './pages/feed/trending'
import Live from './composant/Live'
=======
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b

function App() {
  return (
    <div className="min-h-full h-screen flex">
      <div className="w-full space-y-8">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<h1>Page Résultats</h1>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
<<<<<<< HEAD
            <Route path="/feed/trending" element={<Tendances />} />
            <Route path="/live" element={<Live />} />
=======
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
