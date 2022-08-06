function Footer() {
  const createdYear = 2020
  const currentYear = new Date().getFullYear()

  return (
    <footer className='h-5 w-full text-center text-white'>
      © {createdYear} - {currentYear} Made by{' '}
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
