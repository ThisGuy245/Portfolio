<script>
    import { onMount } from 'svelte';

    const phrases = [
        "I am fine-tuning a LLM.",
        "I am building a game engine.",
        "I craft websites from scratch.",
    ];

    let displayText = '';
    let currentPhrase = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const fullText = phrases[currentPhrase];
        if (isDeleting) {
            displayText = fullText.substring(0, charIndex--);
        } else {
            displayText = fullText.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === fullText.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            setTimeout(type, 300);
        } else {
            setTimeout(type, isDeleting ? 30 : 60);
        }
    }

    onMount(() => {
        type();
    });
</script>

<h1 class="typewriter">Hi, I'm Thomas. <span>{displayText}</span><span class="cursor">|</span></h1>

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
