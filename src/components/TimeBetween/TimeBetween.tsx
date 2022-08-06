import { Fragment, useState, useEffect } from 'react'
import { timeBetween } from '../../utils/time'
import MESSAGES from '../../utils/messages'

import DatePicker from './DatePicker'
import TimePresentation from './TimePresentation'

function TimeBetween() {
  const [start, setStart] = useState({ date: new Date(), useNow: false })
  const [end, setEnd] = useState({ date: new Date(), useNow: true })
  const [results, setResult] = useState('')

  useEffect(() => {
    if (start.useNow && end.useNow) return updateResults()
    const interval = setInterval(updateResults, 1000)

    return () => clearInterval(interval)
  }, [start.useNow, start.date, end.useNow, end.date])

  const updateResults = () => {
    if ((!start.date && !start.useNow) || (!end.date && !end.useNow)) {
      return setResult(MESSAGES.DatePicker.errors.selectValid)
    }
    const sdate = start.useNow ? new Date() : new Date(start.date)
    const edate = end.useNow ? new Date() : new Date(end.date)

    const updatedResults = timeBetween({ startDate: sdate, endDate: edate })
    setResult(updatedResults)
  }

  return (
    <Fragment>
      <div className='flex flex-row flex-wrap justify-center text-white'>
        <DatePicker
          text={MESSAGES.DatePicker.initial}
          id='startDate'
          value={start.date}
          useNow={start.useNow}
          onChange={setStart}
        />
        <DatePicker
          text={MESSAGES.DatePicker.final}
          id='endDate'
          value={end.date}
          useNow={end.useNow}
          onChange={setEnd}
        />
      </div>

      <TimePresentation time={results} />
    </Fragment>
  )
}

export default TimeBetween
