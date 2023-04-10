import * as i18n from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { IconCode } from '@features/ui';

interface LanguageConfig {
  readonly lang: string;

  // refers to Icon#code property, used to render an icon for language switcher
  readonly icon: IconCode;
}

export const AVAILABLE_LANGUAGES: LanguageConfig[] = [
  {
    lang: 'en',
    icon: 'gb-flag'
  },
  {
    lang: 'ua',
    icon: 'ua-flag'
  }
];

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

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
    },
    returnNull: false
  });

export default i18n;
