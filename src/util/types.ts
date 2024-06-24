export interface Translatable<T extends Translation> {
    id: string | number;
    translations: T[];
}

export interface Translation {
    id: number;
    languages_code: string;
}

export interface Route {
    title: string;
    path: string;
}

export interface Apartment extends Translatable<ApartmentTranslation> {
    name: string;
    body: string;
    pictures: { directus_files_id: string }[];
    price: number;
    type: 'apartment' | 'room';
}

export interface ApartmentTranslation extends Translation {
    name: string;
    body: string;
}

export interface Welcome extends Translatable<WelcomeTranslation> {
    content: string;
    cards: WelcomeCard[];
    access: string;
}

export interface WelcomeTranslation extends Translation {
    content: string;
    access: string;
}

export interface WelcomeCard extends Translatable<WelcomeCardTranslation> {
    heading: string;
    body: string;
    image: string;
    link: string;
}

export interface WelcomeCardTranslation extends Translation {
    heading: string;
    body: string;

}

export interface About extends Translatable<AboutTranslation> {
    name: string;
    body: string;
    image: string;
}

export interface AboutTranslation extends Translation {
    name: string;
    body: string;
}