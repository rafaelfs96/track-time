import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  const createdYear = 2020
  const currentYear = new Date().getFullYear()

  return (
    <footer className='h-5 w-full text-center text-white'>
      © {createdYear} - {currentYear} {t('made_by')}{' '}
      <a
        className='text-white no-underline text-xl font-medium'
        rel='noreferrer'
        href='https://github.com/rafaelfs96'
        target='_blank'>
        rafaelfs96
      </a>
    </footer>
  )
}

export default Footer
