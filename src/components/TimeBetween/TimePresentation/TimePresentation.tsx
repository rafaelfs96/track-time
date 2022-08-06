import MESSAGES from '../../../utils/messages'

interface TimePresentationProps {
  time: string
}

function TimePresentation({ time }: TimePresentationProps) {
  return (
    <p className='m-5 text-xl text-white sm:text-2xl'>
      {!time ? MESSAGES.DatePicker.errors.noDifferences : time}
    </p>
  )
}

export default TimePresentation
