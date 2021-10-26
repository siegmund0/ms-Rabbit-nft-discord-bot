import axios from 'axios';

export const BlockFarmClub = async (): Promise<any> => {
    try {
        let url: string = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=12146';
        let response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'X-CMC_PRO_API_KEY': '65fec7a5-bc73-4a11-81a4-268af54e077c'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('No se le puede pegar a la api')
    }
}