import { Locale, PreferencesState, Theme } from "@app/models";
import { useLocalStorageService } from "@app/services";
import { defineStore } from "pinia";

const DEFAULT_LOCALE: Locale = 'fr';
const DEFAULT_THEME: Theme = 'light';

const storageService = useLocalStorageService();

export const usePreferencesStore = defineStore({
  id: 'preferences',
  state: (): PreferencesState => initialState(),
  actions: {
    toggleTheme() {
      this.theme === 'light' ? this.theme = 'dark' : this.theme = 'light';
      storeTheme(this.theme);
    },
    changeLocale(locale: Locale) {
      this.locale = locale;
    }
  },
  getters: {
    isDarkTheme: (state) => state.theme === 'dark'
  }
});

/**
 * Set the initial state for preferences store
 * By default, populate state with theme / locale values from localStorage
 * If localStorage is empty, then default values are taken, and localStorage is populated
 * @returns user preferences for theme and locale
 */
function initialState(): { locale: Locale, theme: Theme } {
  let locale = storageService.getItem('locale') as Locale;
  if (!locale) {
    storageService.setItem('locale', DEFAULT_LOCALE);
    locale = DEFAULT_LOCALE;
  }

  let theme = storageService.getItem('theme') as Theme;
  if (!theme) {
    storageService.setItem('theme', DEFAULT_THEME);
    theme = DEFAULT_THEME;
  }
  
  storeTheme(theme);

  return {
    locale,
    theme
  }
}

/**
 * Store the selected theme in localStorage
 * Update DOM with new value
 * @param theme
 */
function storeTheme(theme: Theme) {
  storageService.setItem('theme', theme);
  const element = document.querySelector("[data-theme]");
  element?.setAttribute('data-theme', theme);
}