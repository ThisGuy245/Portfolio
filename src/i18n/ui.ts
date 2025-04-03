export const languages: { key: string; name: string }[] = [
    { key: 'en', name: 'English' },
    { key: 'fr', name: 'Français' },
];

export const defaultLang: 'en' = 'en';

export const ui = {
    en: {
        // Navigation
        Home: 'Home',
        Projects: 'Projects',
        Activity: 'Activity',
        Contact: 'Contact',
        Guestbook: 'Guestbook',
        'Not found': 'Not found',
        Path: 'Path',
        Resume: 'Resume',

        // Categories
        Games: 'Games',
        Web: 'Web',
        Music: 'Music',
        'Games Programming': 'Games Programming',
        'Web Programming': 'Web Programming',
        'Sound Engineering': 'Sound Engineering',

        // Portfolio Page
        'My Portfolio': 'My Portfolio',
        'About Me': 'About Me',
        'I am a passionate game software engineer with experience in creating immersive gaming experiences. Specializing in game development and design, I enjoy bringing virtual worlds to life.':
            'I am a passionate game software engineer with experience in creating immersive gaming experiences. Specializing in game development and design, I enjoy bringing virtual worlds to life.',

        // Project Titles
        'Game Studio Project': 'Game Studio Project',
        'Multiplayer Shooter': 'Multiplayer Shooter',
        '3D Graphics Programming': '3D Graphics Programming',
        'Web Invaders Game': 'Web Invaders Game',
        'Guesthouse Site': 'Guesthouse Site',
        'Portfolio Website': 'Portfolio Website',
        'Studio Project OST': 'Studio Project OST',
        'AI Game Engine': 'AI Game Engine',
        'Mobile Map Application': 'Mobile Map Application',

        // Project Descriptions
        'An 8-person project where I served as the overall producer. Team included 2 programmers, 4 designers, and 1 tech artist.':
            'An 8-person project where I served as the overall producer. Team included 2 programmers, 4 designers, and 1 tech artist.',
        'Made for BFX Game Jam 2024, Group leader of a team of 5. Using NetCode in Unity and Nominee for Best Mechanics.':
            'Made for BFX Game Jam 2024, Group leader of a team of 5. Using NetCode in Unity and Nominee for Best Mechanics.',
        'A Doom-inspired level created using OpenGL and SDL2 with C++.': 'A Doom-inspired level created using OpenGL and SDL2 with C++.',
        'A 2D Space-Invaders type to raise awareness in the Cyber space. Built and showcased on the web, CLICK VIEW TO PLAY':
            'A 2D Space-Invaders type to raise awareness in the Cyber space. Built and showcased on the web, CLICK VIEW TO PLAY',
        'A website for a guesthouse in Brittany to showcase the area nearby, localisation implemented':
            'A website for a guesthouse in Brittany to showcase the area nearby, localisation implemented',
        'A personal website showcasing my work and projects. Built using astro.':
            'A personal website showcasing my work and projects. Built using astro.',
        'Coming Soon tracks produced on Logic X Pro for an upcoming project.':
            'Coming Soon tracks produced on Logic X Pro for an upcoming project.',
        'A concept for a game engine navigated through AI, built purely with C++.':
            'A concept for a game engine navigated through AI, built purely with C++.',
        'A mobile application for rating locations, built with Flutter and Dart, using Firebase for online storage.':
            'A mobile application for rating locations, built with Flutter and Dart, using Firebase for online storage.',

        // Index Page
        welcome: 'Welcome',
        profileAlt: 'Thomas Isherwood',
        skills: 'Skills',
        mainLanguages: 'Main Languages',
        skillsAndTools: 'Skills & Tools',
        webDevelopment: 'Web Development',
        featuredProjects: 'Featured Projects',
        gameStudioProject: 'Game Studio Project',
        gameStudioDescription: 'An 8-person project where I served as the overall producer. Team included 2 programmers, 4 designers, and 1 tech artist.',
        aiGameEngine: 'AI Game Engine',
        aiGameEngineDescription: 'A concept for a game engine navigated through AI, built purely with C++.',
        aiGameEngineTools: 'Using OpenGL, SDL2, Winsock & PyTorch.',
        gamesProgramming: 'Games Programming',
        teamSize: 'Team Size',
        learnMore: 'Learn More',
        contactMe: 'Contact Me',
        contactMessage: 'Feel free to reach out to discuss projects, collaborations, or just to connect!',
        getInTouch: 'Get in Touch',

        // Game Studio Project

        'My Role as Producer': 'My Role as Producer',
        'As the producer, I am responsible for:': 'As the producer, I am responsible for:',
        'Project management and task delegation using Trello and Notion.':
            'Project management and task delegation using Trello and Notion.',
        'Creating weekly progress reports and delving into market research / PR for the game.':
            'Creating weekly progress reports and delving into market research / PR for the game.',
        'Managing Git and GitHub, including merging branches and resolving conflicts.':
            'Managing Git and GitHub, including merging branches and resolving conflicts.',
        'Guiding programmers and debugging critical code in Unity.':
            'Guiding programmers and debugging critical code in Unity.',
        'Designing AI behavior trees and creating concept diagrams for game mechanics.':
            'Designing AI behavior trees and creating concept diagrams for game mechanics.',
        'Creating sounds and the OST (Music and Ambience) for the game using Logic X Pro.':
            'Creating sounds and the OST (Music and Ambience) for the game using Logic X Pro.',
        'Core Gameplay': 'Core Gameplay',
        'Players enter the game in the lobby casino room. Each round, they venture into an industrial dungeon to collect loot and return it to the casino to sell. They must meet a quota by betting at the roulette wheel. Failure to meet the quota results in losing favor with the Roulette Deity.':
            'Players enter the game in the lobby casino room. Each round, they venture into an industrial dungeon to collect loot and return it to the casino to sell. They must meet a quota by betting at the roulette wheel. Failure to meet the quota results in losing favor with the Roulette Deity.',
        'Monsters': 'Monsters',
        'Roulette God': 'Roulette God',
        'The Deity that must be pleased within the facility, It will assess the performance of players and either ease/harden the state of the game.':
            'The Deity that must be pleased within the facility, It will assess the performance of players and either ease/harden the state of the game.',
        'Die Monster': 'Die Monster',
        'A large dice that rolls around the level, blocking hallways and eliminating players or monsters it lands on.':
            'A large dice that rolls around the level, blocking hallways and eliminating players or monsters it lands on.',
        'Slot Machine Monster': 'Slot Machine Monster',
        'A flesh amalgamation of a slot machine that chases players with unpredictable speed changes.':
            'A flesh amalgamation of a slot machine that chases players with unpredictable speed changes.',
        'Environment': 'Environment',
        'The game features two main environments: the Casino Lobby and the Industrial Dungeon. The dungeon is a dark, abandoned industrial space with procedurally generated rooms and corridors.':
            'The game features two main environments: the Casino Lobby and the Industrial Dungeon. The dungeon is a dark, abandoned industrial space with procedurally generated rooms and corridors.',

        // AI Game Engine Page
        'AI Game Engine Concept': 'AI Game Engine Concept',

        'Core Concept': 'Core Concept',
        'The AI Game Engine is a revolutionary concept that leverages artificial intelligence to automate game development processes. The engine uses AI to generate game worlds, design levels, and even create NPC behaviors, allowing developers to focus on creativity rather than repetitive tasks. This Task will be using OpenGL, SDL2 and Winsock for Windows.':
            'The AI Game Engine is a revolutionary concept that leverages artificial intelligence to automate game development processes. The engine uses AI to generate game worlds, design levels, and even create NPC behaviors, allowing developers to focus on creativity rather than repetitive tasks. This Task will be using OpenGL, SDL2 and Winsock for Windows.',
        'Technical Details': 'Technical Details',
        'The engine is built entirely in C++ for performance and flexibility. Key technical features include:':
            'The engine is built entirely in C++ for performance and flexibility. Key technical features include:',
        'AI-Driven World Generation': 'AI-Driven World Generation',
        'Procedurally generates game worlds using machine learning algorithms.': 'Procedurally generates game worlds using machine learning algorithms.',
        'Behavior Trees': 'Behavior Trees',
        'AI-controlled NPCs with dynamic decision-making capabilities.': 'AI-controlled NPCs with dynamic decision-making capabilities.',
        'Real-Time Adaptation': 'Real-Time Adaptation',
        'The engine adapts to player behavior, creating a unique experience for each user.': 'The engine adapts to player behavior, creating a unique experience for each user.',
        'Modular Design': 'Modular Design',
        'Easily extensible with plugins for additional functionality.': 'Easily extensible with plugins for additional functionality.',
        'Key Features': 'Key Features',
        'Procedurally generates game worlds using machine learning algorithms, ensuring unique and immersive environments.':
            'Procedurally generates game worlds using machine learning algorithms, ensuring unique and immersive environments.',
        'Dynamic NPC Behavior': 'Dynamic NPC Behavior',
        'NPCs use behavior trees to make dynamic decisions, creating realistic and engaging interactions.':
            'NPCs use behavior trees to make dynamic decisions, creating realistic and engaging interactions.',
        'The engine adapts to player behavior, providing a personalised user experience.':
            'The engine adapts to player behavior, providing a personalised user experience.',
        'Easily extensible with plugins, allowing developers to add new features and functionality.':
            'Easily extensible with plugins, allowing developers to add new features and functionality.',
    },
    fr: {
        // Navigation
        Home: 'Accueil',
        Projects: 'Projets',
        Activity: 'Activité',
        Contact: 'Contact',
        Guestbook: 'Livre d\'or',
        'Not found': 'Pas trouvé',
        Path: 'Chemin',
        Resume: 'Resumé',

        // Categories
        Games: 'Jeux',
        Web: 'Web',
        Music: 'Musique',
        'Games Programming': 'Programmation de Jeux',
        'Web Programming': 'Programmation Web',
        'Sound Engineering': 'Ingénierie Sonore',

        // Portfolio Page
        'My Portfolio': 'Mon Portfolio',
        'About Me': 'À Propos de Moi',
        'I am a passionate game software engineer with experience in creating immersive gaming experiences. Specializing in game development and design, I enjoy bringing virtual worlds to life.':
            'Je suis un ingénieur logiciel de jeux passionné avec de l\'expérience dans la création d\'expériences de jeu immersives. Spécialisé dans le développement et la conception de jeux, j\'aime donner vie à des mondes virtuels.',

        // Project Titles
        'Game Studio Project': 'Projet de Studio de Jeux',
        'Multiplayer Shooter': 'Jeu de Tir Multijoueur',
        '3D Graphics Programming': 'Programmation Graphique 3D',
        'Web Invaders Game': 'Jeu Web Invaders',
        'Guesthouse Site': 'Site de la Maison d\'Hôtes',
        'Portfolio Website': 'Site Web Portfolio',
        'Studio Project OST': 'OST du Projet Studio',
        'AI Game Engine': 'Moteur de Jeu IA',
        'Mobile Map Application': 'Application Mobile de Carte',

        // Project Descriptions
        'An 8-person project where I served as the overall producer. Team included 2 programmers, 4 designers, and 1 tech artist.':
            'Un projet de 8 personnes où j\'ai été le producteur général. L\'équipe comprenait 2 programmeurs, 4 designers et 1 artiste technique.',
        'Made for BFX Game Jam 2024, Group leader of a team of 5. Using NetCode in Unity and Nominee for Best Mechanics.':
            'Réalisé pour la BFX Game Jam 2024, chef de groupe d\'une équipe de 5. Utilisation de NetCode dans Unity et nominé pour les meilleures mécaniques.',
        'A Doom-inspired level created using OpenGL and SDL2 with C++.': 'Un niveau inspiré de Doom créé avec OpenGL et SDL2 en C++.',
        'A 2D Space-Invaders type to raise awareness in the Cyber space. Built and showcased on the web, CLICK VIEW TO PLAY':
            'Un jeu de type Space-Invaders en 2D pour sensibiliser à l\'espace cybernétique. Construit et présenté sur le web, CLIQUEZ POUR JOUER.',
        'A website for a guesthouse in Brittany to showcase the area nearby, localisation implemented':
            'Un site web pour une maison d\'hôtes en Bretagne pour mettre en valeur les environs, localisation implémentée.',
        'A personal website showcasing my work and projects. Built using astro.':
            'Un site web personnel présentant mes travaux et projets. Construit avec Astro.',
        'Coming Soon tracks produced on Logic X Pro for an upcoming project.':
            'Bientôt disponible : des morceaux produits sur Logic X Pro pour un projet à venir.',
        'A concept for a game engine navigated through AI, built purely with C++.':
            'Un concept de moteur de jeu navigué par IA, construit entièrement en C++.',
        'A mobile application for rating locations, built with Flutter and Dart, using Firebase for online storage.':
            'Une application mobile pour évaluer des lieux, construite avec Flutter et Dart, utilisant Firebase pour le stockage en ligne.',

        // Index Page
        welcome: 'Bienvenue',
        profileAlt: 'Thomas Isherwood',
        skills: 'Compétences',
        mainLanguages: 'Langages Principaux',
        skillsAndTools: 'Compétences et Outils',
        webDevelopment: 'Développement Web',
        featuredProjects: 'Projets en Vedette',
        gameStudioProject: 'Projet de Studio de Jeux',
        gameStudioDescription: 'Un projet de 8 personnes où j\'ai été le producteur général. L\'équipe comprenait 2 programmeurs, 4 designers et 1 artiste technique.',
        aiGameEngine: 'Moteur de Jeu IA',
        aiGameEngineDescription: 'Un concept de moteur de jeu navigué par IA, construit entièrement en C++.',
        aiGameEngineTools: 'Utilisant OpenGL, SDL2, Winsock et PyTorch.',
        gamesProgramming: 'Programmation de Jeux',
        teamSize: 'Taille de l\'Équipe',
        learnMore: 'En Savoir Plus',
        contactMe: 'Contactez-Moi',
        contactMessage: 'N\'hésitez pas à me contacter pour discuter de projets, de collaborations ou simplement pour échanger !',
        getInTouch: 'Entrer en Contact',

        // AI Game Engine Page
        'AI Game Engine Concept': 'Concept de Moteur de Jeu IA',

        'Core Concept': 'Concept de Base',
        'The AI Game Engine is a revolutionary concept that leverages artificial intelligence to automate game development processes. The engine uses AI to generate game worlds, design levels, and even create NPC behaviors, allowing developers to focus on creativity rather than repetitive tasks. This Task will be using OpenGL, SDL2 and Winsock for Windows.':
            'Le moteur de jeu IA est un concept révolutionnaire qui utilise l\'intelligence artificielle pour automatiser les processus de développement de jeux. Le moteur utilise l\'IA pour générer des mondes de jeu, concevoir des niveaux et même créer des comportements de PNJ, permettant aux développeurs de se concentrer sur la créativité plutôt que sur des tâches répétitives. Cette tâche utilisera OpenGL, SDL2 et Winsock pour Windows.',
        'Technical Details': 'Détails Techniques',
        'The engine is built entirely in C++ for performance and flexibility. Key technical features include:':
            'Le moteur est entièrement construit en C++ pour la performance et la flexibilité. Les caractéristiques techniques clés incluent :',
        'AI-Driven World Generation': 'Génération de Mondes Pilotée par IA',
        'Procedurally generates game worlds using machine learning algorithms.': 'Génère des mondes de jeu de manière procédurale en utilisant des algorithmes d\'apprentissage automatique.',
        'Behavior Trees': 'Arbres de Comportement',
        'AI-controlled NPCs with dynamic decision-making capabilities.': 'PNJ contrôlés par IA avec des capacités de prise de décision dynamique.',
        'Real-Time Adaptation': 'Adaptation en Temps Réel',
        'The engine adapts to player behavior, creating a unique experience for each user.': 'Le moteur s\'adapte au comportement du joueur, créant une expérience unique pour chaque utilisateur.',
        'Modular Design': 'Conception Modulaire',
        'Easily extensible with plugins for additional functionality.': 'Facilement extensible avec des plugins pour des fonctionnalités supplémentaires.',
        'Key Features': 'Fonctionnalités Clés',
        'Procedurally generates game worlds using machine learning algorithms, ensuring unique and immersive environments.':
            'Génère des mondes de jeu de manière procédurale en utilisant des algorithmes d\'apprentissage automatique, garantissant des environnements uniques et immersifs.',
        'Dynamic NPC Behavior': 'Comportement Dynamique des PNJ',
        'NPCs use behavior trees to make dynamic decisions, creating realistic and engaging interactions.':
            'Les PNJ utilisent des arbres de comportement pour prendre des décisions dynamiques, créant des interactions réalistes et engageantes.',
        'The engine adapts to player behavior, providing a personalised user experience.':
            'Le moteur s\'adapte au comportement du joueur, offrant une expérience utilisateur personnalisée.',
        'Easily extensible with plugins, allowing developers to add new features and functionality.':
            'Facilement extensible avec des plugins, permettant aux développeurs d\'ajouter de nouvelles fonctionnalités.',

        // Game Studio Project Page
        'My Role as Producer': 'Mon Rôle en tant que Producteur',
        'As the producer, I am responsible for:': 'En tant que producteur, je suis responsable de :',
        'Project management and task delegation using Trello and Notion.':
            'Gestion de projet et délégation des tâches en utilisant Trello et Notion.',
        'Creating weekly progress reports and delving into market research / PR for the game.':
            'Création de rapports hebdomadaires de progression et recherche de marché / RP pour le jeu.',
        'Managing Git and GitHub, including merging branches and resolving conflicts.':
            'Gestion de Git et GitHub, y compris la fusion des branches et la résolution des conflits.',
        'Guiding programmers and debugging critical code in Unity.':
            'Guider les programmeurs et déboguer le code critique dans Unity.',
        'Designing AI behavior trees and creating concept diagrams for game mechanics.':
            'Conception d\'arbres de comportement IA et création de diagrammes conceptuels pour les mécaniques de jeu.',
        'Creating sounds and the OST (Music and Ambience) for the game using Logic X Pro.':
            'Création des sons et de l\'OST (musique et ambiance) pour le jeu en utilisant Logic X Pro.',
        'Core Gameplay': 'Gameplay Principal',
        'Players enter the game in the lobby casino room. Each round, they venture into an industrial dungeon to collect loot and return it to the casino to sell. They must meet a quota by betting at the roulette wheel. Failure to meet the quota results in losing favor with the Roulette Deity.':
            'Les joueurs entrent dans le jeu dans le hall du casino. Chaque tour, ils s\'aventurent dans un donjon industriel pour collecter du butin et le ramener au casino pour le vendre. Ils doivent atteindre un quota en pariant à la roulette. Le non-respect du quota entraîne une perte de faveur auprès de la Divinité de la Roulette.',
        'Monsters': 'Monstres',
        'Roulette God': 'Dieu de la Roulette',
        'The Deity that must be pleased within the facility, It will assess the performance of players and either ease/harden the state of the game.':
            'La divinité qui doit être satisfaite dans l\'installation. Elle évaluera la performance des joueurs et adoucira ou durcira l\'état du jeu.',
        'Die Monster': 'Monstre Dé',
        'A large dice that rolls around the level, blocking hallways and eliminating players or monsters it lands on.':
            'Un gros dé qui roule dans le niveau, bloquant les couloirs et éliminant les joueurs ou les monstres sur lesquels il atterrit.',
        'Slot Machine Monster': 'Monstre Machine à Sous',
        'A flesh amalgamation of a slot machine that chases players with unpredictable speed changes.':
            'Une fusion de chair d\'une machine à sous qui poursuit les joueurs avec des changements de vitesse imprévisibles.',
        'Environment': 'Environnement',
        'The game features two main environments: the Casino Lobby and the Industrial Dungeon. The dungeon is a dark, abandoned industrial space with procedurally generated rooms and corridors.':
            'Le jeu propose deux environnements principaux : le hall du casino et le donjon industriel. Le donjon est un espace industriel sombre et abandonné avec des salles et des couloirs générés de manière procédurale.',
    },

} as const;