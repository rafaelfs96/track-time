import i18next from 'i18next'
import { translations } from '../../utils/locales'

function LangSelector() {
  const langs = Object.keys(translations)
  const icons = Object.values(translations)

  return (
    <div className='flex justify-end'>
      {langs.map((lang, index) => (
        <button className='mr-3 text-white' key={lang} onClick={() => i18next.changeLanguage(lang)}>
          <img
            src={icons[index].icon}
            width={30}
            height={20}
            alt={lang}
            title={lang}
            loading='lazy'
          />
        </button>
      ))}
    </div>
  )
}

export default LangSelector
