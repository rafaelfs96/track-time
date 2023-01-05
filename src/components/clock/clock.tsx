import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { rawTime, formatTime } from '../../utils/time'

export function Clock() {
  const { t: translation } = useTranslation()
  const [date, setTime] = useState(rawTime())

  useEffect(() => {
    const interval = setInterval(() => setTime(rawTime()), 500)

    return () => clearInterval(interval)
  }, [])

  const { day, month, year, hour, minute, second } = formatTime(date)

  const formattedDate = translation('date_format', { day, month, year })

  return (
    <h1 className='flex flex-col items-center m-5 text-white'>
      <time className='font-medium text-4xl sm:text-6xl' dateTime={`${hour}:${minute}:${second}`}>
        {`${hour}:${minute}:${second}`}
      </time>
      <time className='font-medium text-4xl sm:text-6xl' dateTime={formattedDate}>
        {formattedDate}
      </time>
    </h1>
  )
}
