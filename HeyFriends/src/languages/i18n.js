import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from 'react-native-localize'

import en from './../locales/en.json'
import vi from './../locales/vi.json'
import ja from './../locales/ja.json'

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect:(callback)=>{return callback(RNLocalize.getLocales()[0].languageCode)},
    init: () => { },
    cacheUserLanguage: () => { }
}

i18n
    .use(languageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: { translation: en },
            vi: { translation: vi },
            ja: { translation: ja },
        },
        fallbackLng: "vi",
        debug: true,

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

export default i18n;