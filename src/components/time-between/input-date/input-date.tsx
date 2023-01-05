import 'react-datepicker/dist/react-datepicker.css'

import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

import DatePicker from 'react-datepicker'

type InputDateProps = {
  value: Date
  id: string
  isDisabled: boolean
  onChange(inputValue: Date): void
}

export function InputDate({ value, id, isDisabled, onChange }: InputDateProps) {
  const { t: translation } = useTranslation()

  return (
    <DatePicker
      locale={i18next.language}
      selected={value}
      dateFormat='MMMM d, yyyy h:mm aa'
      name={id}
      id={id}
      showTimeInput
      timeInputLabel={translation('time')}
      disabled={isDisabled}
      onChange={onChange}
    />
  )
}
