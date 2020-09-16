export const storeInBrowserStorage = <T>(key: string, item: T): void => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getValueForKeyInBrowserStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  try {
    return !!item ? (JSON.parse(item) as T) : null;
  } catch (e) {
    // TODO Handle error
    return null;
  }
};

export const removeFromBrowserStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const clearBrowserStorage = (): void => {
  localStorage.clear();
};
