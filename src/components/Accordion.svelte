<script lang="ts">
    export let open = false;
    export let gamesSrc: string = '/media/games.webp';
    export let webSrc: string = '/media/web.jpg';
    export let musicSrc: string = '/media/music.jpg';

    const toggleOpen = () => open = !open;
</script>

<div class="accordion" class:open={open} on:click={toggleOpen}>
    <div class="image-container" class:open={open}>

        <img src={gamesSrc} alt="Game Image" class="accordion-image"/>
    </div>
</div>

<style>
    .accordion {
        border: 1px solid #ccc;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        transition: max-width 0.6s ease;
        max-width: 300px; /* Initial width */
        max-height: 200px; /* Set a fixed height */
        cursor: pointer; /* Makes the whole accordion clickable */
    }

    .accordion.open {
        max-width: 100vw; /* Expand to full viewport width when open */
    }

    .image-container {
        flex-grow: 1;
        overflow: hidden;
        transition: flex-grow 0.6s ease;
        position: relative;
        display: flex;
    }

    .image-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5);
        clip-path: polygon(0 0, 10% 0, 0 100%);
        transition: clip-path 0.6s ease;
    }

    .image-container.open::before {
        clip-path: polygon(0 0, 10% 0, 10% 100%, 0 100%);
    }

    .accordion-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: blur(0px);
        transition: filter 0.6s ease, transform 0.6s ease;
        display: block;
    }

    .image-container.open .accordion-image {
        filter: blur(1px);
        transform: scale(1.05);
    }
</style>
