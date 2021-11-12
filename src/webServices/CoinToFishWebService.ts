import axios from 'axios';

export const CoinToFishWebService = async (): Promise<any> => {
    try {
        let url: string = 'https://api.coingecko.com/api/v3/coins/coin-to-fish';
        let response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('No se le puede pegar a la api')
    }
}