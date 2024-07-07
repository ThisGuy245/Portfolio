export const languages : {key: string, name: string}[] = [
    {key: 'en-GB', name: 'English'},
    {key: 'fr-Fr', name: 'Français'}
]

export const defaultLang : "en-GB" = 'en-GB';

export const ui = {
    'en-GB': {
        'Home': 'Home',
        'Projects': 'Projects',
        'Activity': 'Activity',
        'About': 'About',
        'Contact': 'Contact',
        'Guestbook': 'Guestbook',
        'Not found': 'Not found',
        'Path': 'Path',

        'Games': 'Games',
        'Web': 'Web',
        'Music': 'Music',
    },

    'fr-FR': {
        'Home': 'Accueil',
        'Projects': 'Projets',
        'Activity': 'Activité',
        'About': 'À propos',
        'Contact': 'Contact',
        'Not found': 'Pas trouvé',
        'Path': 'Chemin',
    }
} as const;