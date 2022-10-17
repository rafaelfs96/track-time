import { useTranslation } from 'react-i18next'

type TimePresentationProps = {
  time: string
}

function TimePresentation({ time }: TimePresentationProps) {
  const { t } = useTranslation()
  return (
    <p className='m-5 text-xl text-white sm:text-2xl'>{!time ? t('no_difference_date') : time}</p>
  )
}

export default TimePresentation
