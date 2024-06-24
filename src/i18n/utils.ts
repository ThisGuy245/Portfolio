import type {Translatable, Translation} from '../util/types.ts';
import {ui, defaultLang} from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export const useTranslations = (lang: keyof typeof ui) => (key: string) =>
    ui[lang][key as keyof typeof ui[typeof defaultLang]] || ui[defaultLang][key as keyof typeof ui[typeof defaultLang]];

export const translate = <T extends Translation>(data: Translatable<T>, lang: string): T =>
    data.translations.find(t => t.languages_code === lang) ?? translate<T>(data, defaultLang);