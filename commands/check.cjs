const KeyManager = require('../lib/KeyManager.cjs');
const CryptoApi = require('../lib/cryptoApi.cjs');
async function price(cmd){
    try{
        keyManager = new KeyManager();
        const key = await keyManager.getKey();
        const api = new CryptoApi(key);
        const priceop = await api.getPriceData(cmd.coin,cmd.cur);
        console.log(priceop);
    }
    catch(error){
        console.error(error);
    }
};


module.exports = price;
