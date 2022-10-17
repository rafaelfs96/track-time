import * as langs from 'date-fns/locale'
import { registerLocale } from 'react-datepicker'

const langAsKeys = Object.keys(langs)
const langAsValues = Object.values(langs)

langAsKeys.forEach((key, index) => registerLocale(key, langAsValues[index]))
