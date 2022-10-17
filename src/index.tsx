import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/app'

import './utils/configs/i18n'
import './utils/configs/datepicker-langs'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </StrictMode>
)

serviceWorkerRegistration.unregister()

reportWebVitals()
