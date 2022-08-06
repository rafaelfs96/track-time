import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

serviceWorkerRegistration.unregister()

reportWebVitals()
