import React from 'react'
import ReactDOM from 'react-dom/client'
import Tendances from './pages/timeline/Recommandations'
import Bibliotheque from './pages/timeline/library'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Tendances />
  </React.StrictMode>
)
