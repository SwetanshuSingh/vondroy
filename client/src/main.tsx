import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.tsx'
import { ConversationsContextProvider } from './context/ConversationsContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
    <ConversationsContextProvider>
      <App />
    </ConversationsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
