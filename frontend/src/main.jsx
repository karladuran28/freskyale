import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import AppRouter from './AppRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
