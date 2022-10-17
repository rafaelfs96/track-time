import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { translations } from '../locales'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnEmptyString: false,
    resources: { ...translations },
    interpolation: {
      format: value => {
        if (typeof value === 'number') {
          return new Intl.NumberFormat().format(value)
        }
        return value
      }
    }
  })
