import React from 'react'
import './index.css'
import Main from './pages/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'
import ProfilePage from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'
import HomePage from './pages/HomePage'
import Tendances from './pages/feed/trending'
import History from './pages/feed/history'
import Bibliotheque from './pages/feed/library'
import Abonnements from './pages/feed/subscriptions'
import Live from './composant/Live'
import ChaineAccueil from './components/ChaineAccueil'
import WindowUpload from './pages/WindowUpload'
import WindowVideo from './pages/WindowVideo'
import WindowCreateChannel from './pages/WindowCreateChannel'
import WindowCreateOneChannel from './pages/WindowCreateOneChannel'

function App() {
  return (
    <div className="min-h-full h-screen flex">
      <div className="w-full space-y-8">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/feed/trending" element={<Tendances />} />
            <Route path="/feed/history" element={<History />} />
            <Route path="/feed/library" element={<Bibliotheque />} />
            <Route path="/feed/subscriptions" element={<Abonnements />} />
            <Route path="/live" element={<Live />} />
            <Route path="/chaine-accueil" element={<ChaineAccueil />} />
            <Route path="/window-upload" element={<WindowUpload />} />
            <Route path="/window-video" element={<WindowVideo />} />
            <Route path="/window-create-channel" element={<WindowCreateChannel />} />
            <Route path="/window-create-one-channel" element={<WindowCreateOneChannel />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
