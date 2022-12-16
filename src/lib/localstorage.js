import AsyncStorage from '@react-native-async-storage/async-storage';

export const LocalStorageKeys = {
  privateKey: 'privateKey',
  publicKey: 'publicKey',
  publicKeys: 'publicKeys',
  activePublicKey: 'activePublicKey',
  hasDoneBackup: 'hasDoneBackup',
  theme: 'theme',
};

export const LocalStorage = {
  async set(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  },
  async get(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  },
  async remove(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {}
  },
  async getKeys() {
    try {
      return AsyncStorage.getAllKeys();
    } catch (e) {
      return [];
    }
  },
  async batchRemove(keys) {
    try {
      await AsyncStorage.multiRemove(keys);
    } catch (e) {}
  },
};
