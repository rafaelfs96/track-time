import './index.css'

import Clock from './clock'
import TimeBetween from './time-between'
import Footer from './footer'
import LangSelector from './lang-selector'

function App() {
  return (
    <div className='flex flex-col flex-nowrap justify-between p-3 text-center h-screen bg-gray-900'>
      <LangSelector />
      <Clock />
      <div className='flex-auto'>
        <TimeBetween />
      </div>
      <Footer />
    </div>
  )
}

export default App
