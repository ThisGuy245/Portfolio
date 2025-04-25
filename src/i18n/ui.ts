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
        'Games Programming': 'Games Development',
        'Web Programming': 'Web Development',
        'Sound Engineering': 'Sound Engineering',

        // Portfolio Page
        'My Portfolio': 'My Portfolio',
        'About Me': 'About Me',
        'I am a passionate game software engineer with experience in creating immersive gaming experiences. Specializing in game development and design, I enjoy bringing virtual worlds to life.':
            'I am a passionate game software engineer with experience in creating immersive gaming experiences. Specializing in game development and design, I enjoy bringing virtual worlds to life.',

        // Project Titles
        'Game Studio Project': 'Game Studio Project',
        'BFX Fest Game Jam': 'BFX Fest Game Jam',
        'Physics/Render Engine': 'Physics/Render Engine',
        'Web Invaders Game': 'Web Invaders Game',
        'Guesthouse Site': 'Guesthouse Site',
        'Portfolio Website': 'Portfolio Website',
        'Studio Project OST': 'Studio Project OST',
        'AI Game Engine': 'AI Game Engine',
        'Mobile Map Application': 'Mobile Map Application',

        // Project Descriptions
        'GSPdesc':
            'An 8-person project where I served as the overall producer. Team included 2 programmers, 4 designers, and 1 tech artist.',
        'BFXdesc':
            'Made for BFX Game Jam 2024, Group leader of a team of 5. Using NetCode in Unity and Nominee for Best Mechanics.',
        '3GPdesc':'A Physics & Rendering engine. Featuring a doom-inspired level created using OpenGL and SDL2 with C++.',
        'JE3desc':
            'A 2D Space-Invaders type to raise awareness in the Cyber space. Built and showcased on the web with future support coming soon',
        'BZHdesc':
            'A website for a guesthouse in Brittany to showcase the area nearby, localisation implemented',
        'Portdesc':
            'A personal website showcasing my work and projects. Built using astro, svelte and i18n.',
        'Logicdesc':
            'Coming Soon tracks produced on Logic X Pro for an upcoming project.',
        'Enginedesc':
            'A concept for a game engine navigated through AI, built with C++, my own physics engine and Mistral LLM. ',
        'Mobiledesc':
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
        gameStudioDescription: 'An 8-person project where I serve as the overall producer. Team included 2 programmers, 4 designers, and 1 tech artist.',
        aiGameEngine: 'AI Game Engine',
        aiGameEngineDescription: 'A concept for a game engine navigated through AI, built purely with C++.',
        aiGameEngineTools: 'Using OpenGL, SDL2, Winsock & PyTorch.',
        gamesProgramming: 'Games Programming',
        teamSize: 'Team Size',
        learnMore: 'Learn More',
        contactMe: 'Contact Me',
        contactMessage: 'Feel free to reach out to discuss projects, collaborations, or just to connect!',
        getInTouch: 'Get in Touch',

        // TypeWriter script
        'I am fine-tuning a LLM.': 'I am fine-tuning a LLM.',
        'I am building a game engine.':'I am building a game engine.',
        'I craft websites from scratch.':'I craft websites from scratch.',
        "intro.greeting": "Hi, I'm Thomas.",


        // Game studio Project

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

        // Activities Page
        'My Activities': 'My Activities',
        'Game Jam': 'Game Jam',
        'Professional Experience': 'Professional Experience',
        'Games Development': 'Games Development',
        'Community': 'Community',

        // BFX Festival Activity
        'BFX Festival 2024 - Best Mechanics Nominee': 'BFX Festival 2024 - Best Mechanics Nominee',
        'Led development of multiplayer game under 48-hour deadline': 'Led development of multiplayer game under 48-hour deadline',
        'As team leader and producer for our BFX game jam entry, I spearheaded the technical direction and implemented all network programming using Unity Netcode. Managed a team of 5 developers, establishing Git workflows and coordinating our rapid development cycle. Designed the core multiplayer mechanics that earned us a nomination for Best Mechanics. Presented our project to judges and other teams, gaining valuable experience in team-based game development under extreme time pressure.':
            'As team leader and producer for our BFX game jam entry, I spearheaded the technical direction and implemented all network programming using Unity Netcode. Managed a team of 5 developers, establishing Git workflows and coordinating our rapid development cycle. Designed the core multiplayer mechanics that earned us a nomination for Best Mechanics. Presented our project to judges and other teams, gaining valuable experience in team-based game development under extreme time pressure.',

        // Studio Project Activity
        'Studio Project - Elected Producer': 'Studio Project - Elected Producer',
        'Pitched and led development of commercial-grade multiplayer game': 'Pitched and led development of commercial-grade multiplayer game',
        'After presenting my vision for replayable multiplayer games with dark aesthetics, I was elected producer by my peers. Developed the technical roadmap for an 8-person student team creating a game designed to extend beyond academic requirements into commercial release. Established production pipelines, conducted code reviews, and mentored junior team members while implementing core gameplay systems.':
            'After presenting my vision for replayable multiplayer games with dark aesthetics, I was elected producer by my peers. Developed the technical roadmap for an 8-person student team creating a game designed to extend beyond academic requirements into commercial release. Established production pipelines, conducted code reviews, and mentored junior team members while implementing core gameplay systems.',

        // Denix Studio Activity
        'Denix Studio - AI Engineer': 'Denix Studio - AI Engineer',
        'Core programmer at indie studio developing commercial title': 'Core programmer at indie studio developing commercial title',
        'Working part-time as AI engineer and core programmer at Denix Studio (13-person indie team), contributing to commercial game development. My role focuses on implementing robust AI systems while adhering to industry-standard practices. This first professional experience provides valuable insight into studio workflows, version control at scale, and the realities of shipping commercial products in a flexible but demanding indie environment.':
            'Working part-time as AI engineer and core programmer at Denix Studio (13-person indie team), contributing to commercial game development. My role focuses on implementing robust AI systems while adhering to industry-standard practices. This first professional experience provides valuable insight into studio workflows, version control at scale, and the realities of shipping commercial products in a flexible but demanding indie environment.',

        // Mentor Activity
        'Technical Mentor - Coding Bootcamp': 'Technical Mentor - Coding Bootcamp',
        'Volunteered as mentor for underrepresented groups in tech': 'Volunteered as mentor for underrepresented groups in tech',
        'Dedicated 12 weeks to mentoring aspiring developers from underrepresented backgrounds. Conducted code reviews, led debugging sessions, and taught fundamental programming concepts. Created specialized materials for game development track students, focusing on Unity workflows and multiplayer concepts drawn from my professional and academic experiences.':
            'Dedicated 12 weeks to mentoring aspiring developers from underrepresented backgrounds. Conducted code reviews, led debugging sessions, and taught fundamental programming concepts. Created specialized materials for game development track students, focusing on Unity workflows and multiplayer concepts drawn from my professional and academic experiences.'
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
        'Games Programming': 'Développement de Jeux',
        'Web Programming': 'Développement Web',
        'Sound Engineering': 'Ingénierie Sonore',

        // Portfolio Page
        'My Portfolio': 'Mon Portfolio',
        'About Me': 'À Propos de Moi',
        'I am a passionate game software engineer with experience in creating immersive gaming experiences. Specializing in game development and design, I enjoy bringing virtual worlds to life.':
            'Je suis un ingénieur logiciel de jeux passionné avec de l\'expérience dans la création d\'expériences de jeu immersives. Spécialisé dans le développement et la conception de jeux, j\'aime donner vie à des mondes virtuels.',

        // Project Titles
        'Game Studio Project': 'Projet: Studio de Jeux',
        'BFX Fest Game Jam': 'BFX Fest Game Jam',
        'Physics/Render Engine': 'Physique et Rendu',
        'Web Invaders Game': 'Jeu Web Invaders',
        'Guesthouse Site': 'Maison d\'Hôtes Hirel',
        'Portfolio Website': 'Site Web Portfolio',
        'Studio Project OST': 'OST du Projet studio',
        'AI Game Engine': 'Moteur de Jeu IA',
        'Mobile Map Application': 'Application Mobile de Carte',

        // Project Descriptions
        'GSPdesc':
            'Un projet de 8 personnes où j\'ai été le producteur général. L\'équipe comprenait 2 programmeurs, 4 designers et 1 artiste technique.',
        'BFXdesc':
            'Créé pour le BFX Game Jam 2024, chef d’équipe d’un groupe de 5. Utilisation de NetCode dans Unity et nommé pour la meilleure mécanique.',
        '3GPdesc': 'Un moteur de physique et de rendu. Avec un niveau inspiré de Doom, créé en C++ à l’aide d’OpenGL, GLM et SDL2.',
        'JE3desc':
            'Un jeu de type Space-Invaders en 2D pour sensibiliser à l\'espace cybernétique. Construit et présenté sur le web, CLIQUEZ POUR JOUER.',
        'BZHdesc':
            'Un site web pour une maison d\'hôtes en Bretagne pour mettre en valeur les environs, localisation implémentée.',
        'Portdesc':
            'Un site web personnel présentant mes travaux et projets. Construit avec Astro.',
        'Logicdesc':
            'Bientôt disponible : des morceaux produits sur Logic X Pro pour un projet à venir.',
        'Enginedesc':
            'Un concept de moteur de jeu navigué par IA, développé en C++ avec mon propre moteur physique et le LLM Mistral.',
        'Mobiledesc':
            'Une application mobile pour évaluer des lieux, construite avec Flutter et Dart, utilisant Firebase pour le stockage en ligne.',

        // Index Page
        welcome: 'Bienvenue',
        profileAlt: 'Thomas Isherwood',
        skills: 'Compétences',
        mainLanguages: 'Langages Principaux',
        skillsAndTools: 'Compétences et Outils',
        webDevelopment: 'Développement Web',
        featuredProjects: 'Projets en Vedette',
        gameStudioProject: 'Projet de studio de Jeux',
        gameStudioDescription: 'Un projet de 8 personnes où je suis le producteur général. L\'équipe comprenait 2 programmeurs, 4 designers et 1 artiste technique.',
        aiGameEngine: 'Moteur de Jeu IA',
        aiGameEngineDescription: 'Un concept de moteur de jeu navigué par IA, construit entièrement en C++.',
        aiGameEngineTools: 'Utilisant OpenGL, SDL2, Winsock et PyTorch.',
        gamesProgramming: 'Programmation de Jeux',
        teamSize: 'Taille de l\'Équipe',
        learnMore: 'En Savoir Plus',
        contactMe: 'Contactez-Moi',
        contactMessage: 'N\'hésitez pas à me contacter pour discuter de projets, de collaborations ou simplement pour échanger !',
        getInTouch: 'Entrer en Contact',

        // TypeWriter script
        'I am fine-tuning a LLM.': 'Je fine-tune un LLM.',
        'I am building a game engine.':'Je développe un moteur de jeu.',
        'I craft websites from scratch.':'Je crée des sites web à partir de zéro.',
        "intro.greeting": "Salut, Je suis Thomas.",

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

        // Game studio Project Page
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


        // Activities Page
        'My Activities': 'Mes Activités',
        'Game Jam': 'Game Jam',
        'Professional Experience': 'Expérience Professionnelle',
        'Games Development': 'Development de Jeux',
        'Community': 'Communauté',

        // BFX Festival Activity
        'BFX Festival 2024 - Best Mechanics Nominee': 'BFX Festival 2024 - Nommé pour les Meilleures Mécaniques',
        'Led development of multiplayer game under 48-hour deadline': 'Dirigé le développement d\'un jeu multijoueur sous un délai de 48 heures',
        'As team leader and producer for our BFX game jam entry, I spearheaded the technical direction and implemented all network programming using Unity Netcode. Managed a team of 5 developers, establishing Git workflows and coordinating our rapid development cycle. Designed the core multiplayer mechanics that earned us a nomination for Best Mechanics. Presented our project to judges and other teams, gaining valuable experience in team-based game development under extreme time pressure.':
            'En tant que chef d\'équipe et producteur de notre participation à la BFX game jam, j\'ai dirigé l\'orientation technique et implémenté toute la programmation réseau en utilisant Unity Netcode. J\'ai managé une équipe de 5 développeurs, mis en place des workflows Git et coordonné notre cycle de développement rapide. Conçu les mécaniques multijoueurs principales qui nous ont valu une nomination pour les Meilleures Mécaniques. Présenté notre projet aux juges et autres équipes, acquérant une expérience précieuse en développement de jeu en équipe sous pression temporelle extrême.',

        // Studio Project Activity
        'Studio Project - Elected Producer': 'Projet Studio - Producteur Élu',
        'Pitched and led development of commercial-grade multiplayer game': 'Proposé et dirigé le développement d\'un jeu multijoueur de qualité commerciale',
        'After presenting my vision for replayable multiplayer games with dark aesthetics, I was elected producer by my peers. Developed the technical roadmap for an 8-person student team creating a game designed to extend beyond academic requirements into commercial release. Established production pipelines, conducted code reviews, and mentored junior team members while implementing core gameplay systems.':
            'Après avoir présenté ma vision de jeux multijoueurs rejouables avec une esthétique sombre, j\'ai été élu producteur par mes pairs. Développé la feuille de route technique pour une équipe étudiante de 8 personnes créant un jeu conçu pour dépasser les exigences académiques et atteindre une sortie commerciale. Établi des pipelines de production, effectué des revues de code et encadré les membres juniors de l\'équipe tout en implémentant les systèmes de gameplay principaux.',

        // Denix Studio Activity
        'Denix Studio - AI Engineer': 'Denix Studio - Ingénieur IA',
        'Core programmer at indie studio developing commercial title': 'Programmeur principal dans un studio indie développant un titre commercial',
        'Working part-time as AI engineer and core programmer at Denix Studio (13-person indie team), contributing to commercial game development. My role focuses on implementing robust AI systems while adhering to industry-standard practices. This first professional experience provides valuable insight into studio workflows, version control at scale, and the realities of shipping commercial products in a flexible but demanding indie environment.':
            'Travaillant à temps partiel en tant qu\'ingénieur IA et programmeur principal chez Denix Studio (équipe indie de 13 personnes), contribuant au développement de jeux commerciaux. Mon rôle se concentre sur l\'implémentation de systèmes IA robustes tout en respectant les pratiques standards de l\'industrie. Cette première expérience professionnelle offre un aperçu précieux des workflows studio, du contrôle de version à grande échelle et des réalités de la livraison de produits commerciaux dans un environnement indie flexible mais exigeant.',

        // Mentor Activity
        'Technical Mentor - Coding Bootcamp': 'Mentor Technique - Bootcamp de Codage',
        'Volunteered as mentor for underrepresented groups in tech': 'Bénévole en tant que mentor pour des groupes sous-représentés dans la tech',
        'Dedicated 12 weeks to mentoring aspiring developers from underrepresented backgrounds. Conducted code reviews, led debugging sessions, and taught fundamental programming concepts. Created specialized materials for game development track students, focusing on Unity workflows and multiplayer concepts drawn from my professional and academic experiences.':
            'Consacré 12 semaines à encadrer des développeurs en herbe issus de milieux sous-représentés. Effectué des revues de code, dirigé des sessions de débogage et enseigné les concepts de programmation fondamentaux. Créé du matériel spécialisé pour les étudiants en développement de jeux, en mettant l\'accent sur les workflows Unity et les concepts multijoueurs tirés de mes expériences professionnelles et académiques.'
    }
} as const;