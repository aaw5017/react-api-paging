import { ApiResponse, BreedInfo } from "./ApiResponse";

const UNKNOWN_VALUE = 'Uknown';

/**
 * A concrete card model class
 */
export class CardModel {
    readonly id: string;
    readonly name: string;
    readonly imageUrl: string;
    readonly wikiUrl?: string;
    readonly infoList: Record<string, string>[] = [];

    constructor(data: ApiResponse) {
        this.id = data.id;
        this.imageUrl = data.url;

        // NOTE: Best practice would be to falsy check the array before using it.
        // For purposes of the exercise, assume data.breeds will always contain at
        // least one item
        const breed = data.breeds[0];

        if (breed.wikipedia_url)
            this.wikiUrl = breed.wikipedia_url;

        this.name = breed.name;

        this.assignInfo(breed);

    }

    private assignInfo(breed: BreedInfo) {
        this.infoList.push({ key: 'Origin', value: breed.origin || UNKNOWN_VALUE });
        this.infoList.push({ key: 'Bred For', value: breed.bred_for || UNKNOWN_VALUE });
        this.infoList.push({ key: 'Breed Group', value: breed.breed_group || UNKNOWN_VALUE });
        this.infoList.push({ key: 'Life Span', value: breed.life_span || UNKNOWN_VALUE });
        this.infoList.push({ key: 'Temperament', value: breed.temperament || UNKNOWN_VALUE });
    }
}