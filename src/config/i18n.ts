import i18n from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{ns}}.{{lng}}.json'
    },
    interpolation: {
      escapeValue: false
    }
  });

export const availableLanguages = ['en', 'ua'];

export default i18n;
