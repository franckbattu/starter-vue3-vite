function getItem(key: string): string | null {
  return localStorage.getItem(key);
}

function setItem(key: string, value: string): void {
  localStorage.setItem(key, value);
}

export type LocalStorageType = {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string) => void;
}

export function useLocalStorageService(): LocalStorageType {
  return {
    getItem,
    setItem
  }
}