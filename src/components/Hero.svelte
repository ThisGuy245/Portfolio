<script>
    import { onMount } from 'svelte';
    let scrollY = 0;

    onMount(() => {
        const handleScroll = () => {
            scrollY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>

<section class="hero">
    <h1 style="transform: scale({1 + scrollY / 1000})">
        Hi, I'm Thomas. I build <span class="highlight">Games</span>, <span class="highlight">AI</span>, and <span class="highlight">Web</span>.
    </h1>
</section>

<style>
    .hero {
        padding: 4rem;
        text-align: center;
    }
    .highlight {
        color: #9b5de5;
        font-weight: bold;
    }
</style>
