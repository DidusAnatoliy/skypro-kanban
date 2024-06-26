import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/user.jsx'
import { CardProvider } from './contexts/card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CardProvider>
    <UserProvider>
    <App />
    </UserProvider>
    </CardProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
