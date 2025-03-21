import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WheatherContextProvider from './store/WheatherContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WheatherContextProvider>
    <App />
    </WheatherContextProvider>
  </StrictMode>,
)
