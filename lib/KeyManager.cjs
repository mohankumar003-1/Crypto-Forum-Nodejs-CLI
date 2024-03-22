// Instead of require, use dynamic import
const createConfigStorePromise = import('configstore').then(module => module.default);
const pkg = require('../package.json');

class KeyManager {
    constructor() {
        // Use dynamic import result to create the ConfigStore instance
        this.confPromise = createConfigStorePromise.then(ConfigStore => new ConfigStore(pkg.name));
    }

    async setKey(key) {
        const conf = await this.confPromise;
        conf.set('apikey', key);
        return key;
    }

    async getKey() {
        const conf = await this.confPromise;
        const key = conf.get('apikey');
        if (!key) {
            throw new Error('No API KEY Found - Get a key at https://nomics.com');
        }
        return key;
    }

    async deleteKey() {
        const conf = await this.confPromise;
        const key = conf.get('apikey');
        if (!key) {
            throw new Error('No API KEY Found - Get a key at https://nomics.com');
        }
        conf.delete('apikey');
        return;
    }
}

module.exports = KeyManager;

