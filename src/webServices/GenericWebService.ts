import axios from 'axios';

export default class GenericWebService {
    static async getData(game: string): Promise<any> {
        try {
            let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${game}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('No se le puede pegar a la api')
        }
    }
}