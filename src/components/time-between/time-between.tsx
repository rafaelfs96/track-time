import { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { timeBetween } from '../../utils/time'

import DatePicker from './date-picker'
import TimePresentation from './time-presentation'

function TimeBetween() {
  const { t } = useTranslation()

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
      return setResult(t('select_valid_date'))
    }
    const sdate = start.useNow ? new Date() : new Date(start.date)
    const edate = end.useNow ? new Date() : new Date(end.date)

    const updatedResults = timeBetween(
      { startDate: sdate, endDate: edate },
      t('units', { returnObjects: true })
    )
    setResult(updatedResults)
  }

  return (
    <Fragment>
      <div className='flex flex-row flex-wrap justify-center text-white'>
        <DatePicker
          text={t('initial_date')}
          id='startDate'
          value={start.date}
          useNow={start.useNow}
          onChange={setStart}
        />
        <DatePicker
          text={t('final_date')}
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
