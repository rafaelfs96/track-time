import { useTranslation } from 'react-i18next'

import InputDate from '../input-date'

type onChangeProps = {
  date: Date
  useNow: boolean
}

type DatePickerProps = {
  onChange({ date, useNow }: onChangeProps): void
  useNow: boolean
  id: string
  text: string
  value: Date
}

function DatePicker({ onChange, useNow, id, text, value }: DatePickerProps) {
  const { t: translation } = useTranslation()
  const dateChangeHandler = (inputValue: Date) => onChange({ date: inputValue, useNow })

  const useNowChangeHandler = () => onChange({ date: value, useNow: !useNow })

  return (
    <div className='flex flex-col flex-nowrap w-4/5 max-w-[350px] mt-0 mx-5 mb-5'>
      <label htmlFor={id}>{text}: </label>
      <InputDate value={value} id={id} isDisabled={useNow} onChange={dateChangeHandler} />
      <div className='mt-4'>
        <label className='text-base sm:text-lg mr-2' htmlFor={`use-now_${id}`}>
          {translation('use_current_date')}?
        </label>
        <input
          className='w-4 h-4'
          type='checkbox'
          name={`use-now_${id}`}
          id={`use-now_${id}`}
          onChange={useNowChangeHandler}
          checked={useNow}
        />
      </div>
    </div>
  )
}

export default DatePicker
