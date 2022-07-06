/**
 * Contract representing a response from our API
 */
export interface ApiResponse {
    id: string;
    url: string;
    breeds: BreedInfo[];
}

/**
 * Contract representing Breed information.
 *
 * The full model has more key/vals than this, but we
 * are limiting this to only key/vals we are concerned with.
 */
export interface BreedInfo {
    id: string;
    name: string;
    origin?: string;
    bred_for?: string;
    breed_group?: string;
    temperament?: string;
    life_span?: string;
    wikipedia_url?: string;
}