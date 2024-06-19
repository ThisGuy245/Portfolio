import {ui, defaultLang} from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export const useTranslations = (lang: keyof typeof ui) => (key: string) =>
    ui[lang][key as keyof typeof ui[typeof defaultLang]] || ui[defaultLang][key as keyof typeof ui[typeof defaultLang]];
