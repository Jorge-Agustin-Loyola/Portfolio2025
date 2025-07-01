import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import All_Routes from './Routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <All_Routes />
  </StrictMode>,
)
