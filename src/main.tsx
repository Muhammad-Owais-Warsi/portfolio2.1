import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import { Container } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container>
    <App />
    </Container>
  </StrictMode>,
)
