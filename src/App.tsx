/* eslint-disable @typescript-eslint/space-before-function-paren */
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import ChannelCreationPage from './pages/ChannelCreation';
import WindowUploadFusion from './pages/WindowUploadFusion';

function App(): JSX.Element {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          {/* Ajoutez ces liens pour naviguer entre les pages */}
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/channel-creation">Channel Creation</Link>
              </li>
              <li>
                <Link to="/window-upload-fusion">Window Upload Fusion</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/channel-creation" element={<ChannelCreationPage />} />
            <Route
              path="/window-upload-fusion"
              element={<WindowUploadFusion />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;