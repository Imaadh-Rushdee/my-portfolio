import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <h1 className="text-4xl font-bold text-purple-500">
      Tailwind finally works 🎉
    </h1>
  </StrictMode>,
)
