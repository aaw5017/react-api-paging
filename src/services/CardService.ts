import { CardModel } from '../models/CardModel';
import { RequestOptions } from '../models/RequestOptions';
import { ApiService } from '../services/ApiService';

/**
 * Service responsible for getting our card data.
 * Interacts with the ApiService and then transforms the raw data
 * into viewmodels that our application can consume.
 */
class CardServiceDefinition {
    async get(opts: RequestOptions = { limit: 10, page: 1 }): Promise<CardModel[]> {
        const results = await ApiService.makeRequest(opts);

        return results.map(res => {
            return new CardModel(res);
        });
    }
}

export const CardService = new CardServiceDefinition();