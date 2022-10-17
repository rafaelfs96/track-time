import i18next from 'i18next'

function LangSelector() {
  return (
    <>
      <button onClick={() => i18next.changeLanguage('en')}>en</button>
      <button onClick={() => i18next.changeLanguage('es')}>es</button>
    </>
  )
}

export default LangSelector
