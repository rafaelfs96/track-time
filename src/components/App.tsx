import './index.css'

import Clock from './Clock'
import TimeBetween from './TimeBetween'
import Footer from './Footer'

function App() {
  return (
    <div className='flex flex-col flex-nowrap justify-between p-3 text-center h-screen bg-gray-900'>
      <Clock />
      <div className='flex-auto'>
        <TimeBetween />
      </div>
      <Footer />
    </div>
  )
}

export default App
