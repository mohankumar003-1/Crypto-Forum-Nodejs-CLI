const axios = require('axios');

class CryptoApi{

    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = 'https://rest.coinapi.io/v1/exchangerate';
    }

    async getPriceData(coin,cur){
        try{
            console.log(`${this.baseUrl}/${coin}/${cur}?apikey=${this.apiKey}`);
            const res = await axios.get(`${this.baseUrl}/${coin}/${cur}?apikey=${this.apiKey}`);

            let output = `Coin: ${res.data.asset_id_base} | Price : ${res.data.rate}`;


            return output;
        }
        catch(error){
            console.error(error);
        }

    }
}

module.exports = CryptoApi;
