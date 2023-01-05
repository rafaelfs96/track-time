import i18next from 'i18next'
import { translations } from '../../utils/locales'

export function LangSelector() {
  const langs = Object.keys(translations)

  return (
    <div className='flex justify-end'>
      {langs.map(lang => (
        <button
          title={lang}
          type='button'
          className='mr-3 text-white'
          key={lang}
          onClick={() => i18next.changeLanguage(lang)}>
          {lang}
        </button>
      ))}
    </div>
  )
}
