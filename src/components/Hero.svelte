<script lang="ts">
    import { onMount } from 'svelte';
    import { getLangFromUrl, useTranslations } from '../i18n/utils';

    let lang: string = 'en';
    let t: (key: string) => string;
    let greeting = "Hi, I'm Thomas.";

    onMount(() => {
        try {
            const url = new URL(window.location.href);
            lang = getLangFromUrl(url);
            t = useTranslations(lang);
            greeting = t("intro.greeting");
        } catch (error) {
            console.error('Error initializing hero:', error);
        }
    });
</script>

<section class="hero">
    <div class="hero-content">
        <h1 class="hero-title">
            {greeting}
        </h1>
        <p class="hero-subtitle">
            Game Developer & Creative Technologist
        </p>
        <p class="hero-description">
            I build immersive gaming experiences, AI-powered systems, and modern web applications.
        </p>
        <div class="hero-actions">
            <a href={`/${lang}/projects`} class="btn btn-primary">View Work</a>
            <a href={`/${lang}/contact`} class="btn btn-secondary">Get in Touch</a>
        </div>
    </div>
</section>

<style>
    .hero {
        padding: var(--space-2xl) var(--space-md);
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
    }

    .hero-content {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }

    .hero-title {
        font-size: clamp(2.5rem, 6vw, 4rem);
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: -0.03em;
        margin: 0;
        background: linear-gradient(135deg, var(--color-text) 0%, var(--color-text-muted) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .hero-subtitle {
        font-size: clamp(1.25rem, 3vw, 1.5rem);
        font-weight: 500;
        color: var(--color-accent);
        margin: 0;
    }

    .hero-description {
        font-size: 1.125rem;
        color: var(--color-text-muted);
        line-height: 1.7;
        margin: 0;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .hero-actions {
        display: flex;
        gap: var(--space-sm);
        justify-content: center;
        flex-wrap: wrap;
        margin-top: var(--space-md);
    }

    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        font-weight: 500;
        text-decoration: none;
        border-radius: 8px;
        transition: all 0.2s ease;
        border: 1px solid transparent;
    }

    .btn-primary {
        background: var(--color-accent);
        color: white;
    }

    .btn-primary:hover {
        background: var(--color-accent-hover);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
    }

    .btn-secondary {
        background: transparent;
        color: var(--color-text);
        border-color: var(--color-border);
    }

    .btn-secondary:hover {
        background: var(--color-surface);
        border-color: var(--color-accent);
        color: var(--color-accent);
    }

    @media (max-width: 768px) {
        .hero {
            padding: var(--space-xl) var(--space-sm);
        }

        .hero-actions {
            flex-direction: column;
        }

        .btn {
            width: 100%;
        }
    }
</style>
