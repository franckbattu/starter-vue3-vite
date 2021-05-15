import { createI18n } from "vue-i18n";
import { en } from './en';
import { fr } from './fr';

export const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: {
    en,
    fr
  }
})