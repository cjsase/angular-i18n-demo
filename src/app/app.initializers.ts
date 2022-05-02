import {loadTranslations} from "@angular/localize";
import {registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';

export const initializeLanguage = (): Promise<void> | void => {
  const language = localStorage.getItem('language');
  if (language && language !== 'en-US') {
    return fetch(`/assets/i18n/${language}.json`).then(response => response.json()).then(response => {
      loadTranslations(response.translations);
    }).catch(() => {
      console.log(`language ${language} not found, fallback to english`)
    });
  }
}

export const initializeSupportedLocales = () => {
  registerLocaleData(localeDe, 'de-DE');

  const language = localStorage.getItem('language');
  switch (language) {
    case 'de-DE': {
      document.documentElement.lang = language;
    }
  }
  return language ?? 'en-US';
}
