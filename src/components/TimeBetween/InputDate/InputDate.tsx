import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'

interface InputDateProps {
  value: Date
  id: string
  isDisabled: boolean
  onChange(inputValue: Date): void
}

function InputDate({ value, id, isDisabled, onChange }: InputDateProps) {
  return (
    <DatePicker
      selected={value}
      dateFormat='MMMM d, yyyy h:mm aa'
      name={id}
      id={id}
      showTimeInput
      timeInputLabel='Time:'
      disabled={isDisabled}
      onChange={onChange}
    />
  )
}

export default InputDate
