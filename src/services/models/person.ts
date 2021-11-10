
export interface imageObject {
    medium: string;
    original: string
}

export interface Person {
    id: number;
    url: string;
    name: string;
    birtday: string | null;
    gender: string | null;
    updated: number;
    image: imageObject | null;
}