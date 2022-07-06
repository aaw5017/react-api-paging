import { ApiResponse } from '../models/ApiResponse';
import { RequestOptions } from '../models/RequestOptions';

/**
 * Normally, this key would be safely tucked away on the back end, but for purposes of this exercise, I am tossing it directly inside the service
 */
const API_KEY = 'a9144fc4-0276-49b4-9735-fc82ae44f999';

/**
 * Service responsible for making requests to The Dog API via native fetch requests in the browser
 */
class ApiServiceDefinition {
    readonly baseUrl = 'https://api.thedogapi.com/v1/images/search';

    /**
     * Gets fetch api options
     * @returns RequestInit object
     */
    private getRequestOptions(): RequestInit {
        return {
            method: 'GET',
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json'
            }
        };
    }

    /**
     * Make a request to the Dog Api with supplied query parameters
     * @returns A Promise object containing Dog Api metadata
     */
    async makeRequest(opts: RequestOptions): Promise<ApiResponse[]> {
        const fetchOpts = this.getRequestOptions();
        const response = await fetch(`${this.baseUrl}?limit=${opts.limit}&page=${opts.page}&size=small&order=ASC`, fetchOpts);
        const json: Promise<ApiResponse[]> = await response.json();

        return json;
    }

}

// Export a single instance of the service to be used across the application
export const ApiService = new ApiServiceDefinition();