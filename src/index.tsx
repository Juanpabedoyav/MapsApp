import React from 'react'
import ReactDOM from 'react-dom/client'
import { MapApp } from './MapApp'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <MapApp />
  </React.StrictMode>
)
