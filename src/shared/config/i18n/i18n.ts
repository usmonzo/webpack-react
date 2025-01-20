import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
	// .use(Backend)
	// .use(LanguageDetector)
	.use(initReactI18next)

	.init({
		fallbackLng: 'en',
		debug: __IS_DEV__,

		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	})

export default i18n
