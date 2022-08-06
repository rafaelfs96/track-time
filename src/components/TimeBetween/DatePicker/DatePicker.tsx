import InputDate from '../InputDate'

interface onChangeProps {
  date: Date
  useNow: boolean
}

interface DatePickerProps {
  onChange({ date, useNow }: onChangeProps): void
  useNow: boolean
  id: string
  text: string
  value: Date
}

function DatePicker({ onChange, useNow, id, text, value }: DatePickerProps) {
  const dateChangeHandler = (inputValue: Date) => onChange({ date: inputValue, useNow })

  const useNowChangeHandler = () => onChange({ date: value, useNow: !useNow })

  return (
    <div className='flex flex-col flex-nowrap w-4/5 max-w-[350px] mt-0 mx-5 mb-5'>
      <label htmlFor={id}>{text}: </label>
      <InputDate value={value} id={id} isDisabled={useNow} onChange={dateChangeHandler} />
      <div>
        <label className='text-base sm:text-lg mr-2' htmlFor={`use-now_${id}`}>
          Use current date?
        </label>
        <input
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
