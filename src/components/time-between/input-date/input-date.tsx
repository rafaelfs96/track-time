import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'

type InputDateProps = {
  value: Date
  id: string
  isDisabled: boolean
  onChange(inputValue: Date): void
}

function InputDate({ value, id, isDisabled, onChange }: InputDateProps) {
  const { t } = useTranslation()

  return (
    <DatePicker
      locale={i18next.language}
      selected={value}
      dateFormat='MMMM d, yyyy h:mm aa'
      name={id}
      id={id}
      showTimeInput
      timeInputLabel={`${t('time')}:`}
      disabled={isDisabled}
      onChange={onChange}
    />
  )
}

export default InputDate
