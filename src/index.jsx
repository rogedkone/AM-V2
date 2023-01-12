import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import App from './App';

import eng from './locales/en/translation.json';
import rus from './locales/ru/translation.json';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: eng,
      },
      ru: {
        translation: rus,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

i18next.languages = ['en', 'ru'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);
