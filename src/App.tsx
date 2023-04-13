/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'
import ChannelCreationPage from './pages/ChannelCreation'

function App () {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/channel-creation" element={<ChannelCreationPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  )
}
export default App
