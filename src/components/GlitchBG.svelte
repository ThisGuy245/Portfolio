<script>
    import { onMount } from 'svelte';
</script>

<div class="glitch-container">
    <div class="scanlines"></div>
    <div class="glitch-shift"></div>
</div>

<style>
    .glitch-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: -10;
        overflow: hidden;
        mix-blend-mode: screen;
    }

    /* Scanline effect */
    .scanlines {
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.02) 0px,
                rgba(255, 255, 255, 0.02) 1px,
                transparent 2px
        );
        animation: flicker 0.2s infinite;
    }

    /* Glitch shift effect */
    .glitch-shift {
        position: absolute;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, rgba(255, 0, 255, 0.05), transparent 60%);
        animation: glitchShift 3s infinite;
    }

    @keyframes glitchShift {
        0%   { transform: translate(0, 0); }
        10%  { transform: translate(-2px, 1px); }
        20%  { transform: translate(3px, -1px); }
        30%  { transform: translate(-1px, -2px); }
        40%  { transform: translate(1px, 2px); }
        100% { transform: translate(0, 0); }
    }

    @keyframes flicker {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.9; }
    }
</style>
