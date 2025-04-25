<script lang="ts">
    import { onMount } from 'svelte';
    import { getLangFromUrl, useTranslations } from '../i18n/utils';
    import type { Translation } from '../util/types';

    let lang: keyof typeof ui = 'en'; // Initialize with default language
    let t: (key: string) => string;
    let displayText = '';
    let currentPhraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let phrases: string[] = [];

    // Typewriter configuration
    const typingSpeed = 60;
    const deletingSpeed = 30;
    const pauseBetweenPhrases = 5000;

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];

        if (isDeleting) {
            displayText = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            displayText = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let timeout = typingSpeed;

        if (!isDeleting && charIndex === currentPhrase.length) {
            timeout = pauseBetweenPhrases;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            timeout = 300;
        } else if (isDeleting) {
            timeout = deletingSpeed;
        }

        setTimeout(type, timeout);
    }

    onMount(() => {
        try {
            // Safely get language from URL
            const url = new URL(window.location.href);
            lang = getLangFromUrl(url);
            t = useTranslations(lang);

            // Initialize translated phrases
            phrases = [
                t("I am fine-tuning a LLM."),
                t("I am building a game engine."),
                t("I craft websites from scratch.")
            ];

            // Start typewriter effect
            type();
        } catch (error) {
            console.error('Error initializing typewriter:', error);
            // Fallback to default phrases if translation fails
            phrases = [
                "I am fine-tuning a LLM.",
                "I am building a game engine.",
                "I craft websites from scratch."
            ];
            type();
        }
    });
</script>

<h1 class="typewriter">
    {t ? t("intro.greeting") : "Hi, I'm Thomas."} <span>{displayText}</span><span class="cursor">|</span>
</h1>


<style>
    .typewriter {
        font-size: 2.5rem;
        text-align: center;
        margin-top: 4rem;
    }
    .cursor {
        display: inline-block;
        animation: blink 1s infinite;
    }
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
</style>
