const STORAGE_KEYS = {
  AUTH: 'isAuthenticated',
  APPS: 'gradioApps'
} as const;

export function getItem<T>(key: keyof typeof STORAGE_KEYS): T | null {
  const item = localStorage.getItem(STORAGE_KEYS[key]);
  return item ? JSON.parse(item) : null;
}

export function setItem(key: keyof typeof STORAGE_KEYS, value: unknown): void {
  localStorage.setItem(STORAGE_KEYS[key], JSON.stringify(value));
}

export function removeItem(key: keyof typeof STORAGE_KEYS): void {
  localStorage.removeItem(STORAGE_KEYS[key]);
}