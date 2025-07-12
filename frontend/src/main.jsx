import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import All_Routes from './Routes'
import './index.css'
// import App from "./App"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <All_Routes />
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>,
)
