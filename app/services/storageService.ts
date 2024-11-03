class StorageService {
  storageFallback: Record<string, string> = {}

  isLocalStorageAvailable = false;

  isSessionStorageAvailable = false;

  constructor() {
    this.isLocalStorageAvailable = StorageService.checkLocalStorageAvailable();
    this.isSessionStorageAvailable =
      StorageService.checkSessionStorageAvailable();
    this.storageFallback = {};
  }

  static checkLocalStorageAvailable() {
    const testName = `testName${new Date().toString()}`;

    try {
      window.localStorage.setItem(testName, 'testValue');
      window.localStorage.removeItem(testName);

      return true;
    } catch (e) {
      console.debug(e)
      return false;
    }
  }

  static checkSessionStorageAvailable() {
    const testName = `testName${new Date().toString()}`;

    try {
      window.sessionStorage.setItem(testName, 'bar');
      window.sessionStorage.removeItem(testName);

      return true;
    } catch (e) {
      console.debug(e)
      return false;
    }
  }

  set(key: string, value: string, storage?: 'local' | 'session') {
    if (this.isLocalStorageAvailable && storage !== 'session') {
      window.localStorage.setItem(key, value);
    } else if (this.isSessionStorageAvailable) {
      window.sessionStorage.setItem(key, value);
    } else {
      this.storageFallback[key] = value;
    }
  }

  get(key: string, storage?: 'local' | 'session') {
    let value;

    if (this.isLocalStorageAvailable && storage !== 'session') {
      value = window.localStorage?.getItem(key);
    } else if (this.isSessionStorageAvailable) {
      value = window.sessionStorage.getItem(key);
    } else {
      value = this.storageFallback[key];
    }

    return value;
  }

  clear(key: string, storage?: 'local' | 'session') {
    if (this.isLocalStorageAvailable && storage !== 'session') {
      window.localStorage.removeItem(key);
    } else if (this.isSessionStorageAvailable) {
      window.sessionStorage.removeItem(key);
    } else {
      delete this.storageFallback[key];
    }
  }
}

interface IStorageService {
  set(key: string, value: string, storage?: 'local' | 'session'): void;
  get(key: string, storage?: 'local' | 'session'): string | null;
  clear(key: string, storage?: 'local' | 'session'): void;
}

let storageService: IStorageService;

if (typeof window !== 'undefined') {
  if (!window.storageService) {
    window.storageService = new StorageService();
  }
  storageService = window.storageService as IStorageService;
} else {
  storageService = {
    set() {},
    get() { return null; },
    clear() {},
  };
}

export default storageService;
