class StorageService {
  storageFallback = null;

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
      return false;
    }
  }

  set(key, value, storage) {
    if (this.isLocalStorageAvailable && storage !== 'session') {
      window.localStorage.setItem(key, value);
    } else if (this.isSessionStorageAvailable) {
      window.sessionStorage.setItem(key, value);
    } else {
      this.storageFallback[key] = value;
    }
  }

  get(key, storage) {
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

  clear(key, storage) {
    if (this.isLocalStorageAvailable && storage !== 'session') {
      window.localStorage.removeItem(key);
    } else if (this.isSessionStorageAvailable) {
      window.sessionStorage.removeItem(key);
    } else {
      delete this.storageFallback[key];
    }
  }
}

if (window.storageService === undefined) {
  window.storageService = new StorageService();
}

export default window.storageService;
