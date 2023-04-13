import React from 'react'
import ReactDOM from 'react-dom/client'
import Tendances from './Recommandations'
import Bibliotheque from './library'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Tendances />
  </React.StrictMode>
)
