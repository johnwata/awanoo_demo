import {imageObject} from './person';

export interface Country {
    name: string;
    code: string;
    timezone: string;
}

export interface network {
    id: number;
    name: string;
    country: Country;
}

export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    genres: [string];
    image: imageObject | null;
    network: Network | null;
}