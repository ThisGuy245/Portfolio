export const languages : {key: string, name: string}[] = [
    {key: 'en', name: 'English'},
    {key: 'fr', name: 'Français'}
]

export const defaultLang : "en" = 'en';

export const ui = {
    'en': {
        'Home': 'Home',
        'Projects': 'Projects',
        'Activity': 'Activity',
        'Contact': 'Contact',
        'Guestbook': 'Guestbook',
        'Not found': 'Not found',
        'Path': 'Path',
        'Resume': 'Resume',

        'Games': 'Games',
        'Web': 'Web',
        'Music': 'Music',
    },

    'fr': {
        'Home': 'Accueil',
        'Projects': 'Projets',
        'Activity': 'Activité',
        'Contact': 'Contact',
        'Not found': 'Pas trouvé',
        'Path': 'Chemin',
        'Resume': 'Resumé',

        'Games': 'Jeux',
        'Web': 'Web',
        'Music': 'Musique',
    }
} as const;