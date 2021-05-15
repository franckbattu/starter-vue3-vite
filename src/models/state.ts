export type Theme = 'light' | 'dark';
export type Locale = 'fr' | 'en';

export interface PreferencesState {
  locale: Locale,
  theme: Theme;
}