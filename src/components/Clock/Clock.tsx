import { useState, useEffect } from 'react'

import { rawTime, formatTime } from '../../utils/time'

function Clock() {
  const [date, setTime] = useState(rawTime())

  useEffect(() => {
    const interval = setInterval(() => setTime(rawTime()), 500)

    return () => clearInterval(interval)
  }, [])

  const { day, month, year, hour, minute, second } = formatTime(date)

  return (
    <h1 className='flex flex-col items-center m-5 text-white'>
      <time className='font-medium text-4xl sm:text-6xl' dateTime={`${hour}:${minute}:${second}`}>
        {`${hour}:${minute}:${second}`}
      </time>
      <time className='font-medium text-4xl sm:text-6xl' dateTime={`${month}/${day}/${year}`}>
        {`${month}/${day}/${year}`}
      </time>
    </h1>
  )
}

export default Clock
