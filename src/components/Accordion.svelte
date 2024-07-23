<script lang="ts">
    export let open = false;
    export let title: string | HTMLElement = 'Games';
    export let content: HTMLElement | string = '';
    export let backgroundImage: string = ''; // Path to the background image

    const handleClick = () => open = !open;
</script>

<div class="accordion" class:open={open}>
    <div
            class="header"
            style={`background-image: url(${backgroundImage});`}
            on:click={handleClick}
    >
        <div class="title">
            {#if typeof title === 'string'}
                <h2>{title}</h2>
            {:else}
                {title}
            {/if}
        </div>
        <button>
            {#if open}
                &ndash; <!-- Minus symbol when open -->
            {:else}
                + <!-- Plus symbol when closed -->
            {/if}
        </button>
    </div>
    <div class="details" transition:slide>
        {#if typeof content === 'string'}
            <p>{content}</p>
        {:else}
            {content}
        {/if}
    </div>
</div>

<style>
    .accordion {
        overflow: hidden;
        transition: width 0.6s ease;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
    }

    .accordion.open {
        width: 25%; /* Shrink to 25% of the screen width */
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        position: relative;
        background-size: cover;
        background-position: center;
        backdrop-filter: blur(10px); /* Apply blur effect to the background */
        color: #fff;
        cursor: pointer;
        height: 150px; /* Adjust height as needed */
        background-repeat: no-repeat;
    }

    .header:hover {
        background: rgba(255, 255, 255, 0.7); /* Slightly less transparent on hover */
    }

    .title {
        flex: 1;
        display: flex;
        align-items: center;
    }

    button {
        border: none;
        background: none;
        font-size: 1.2rem;
        color: #fff; /* Button color */
    }

    .details {
        padding: 1rem;
        background: #f9f9f9;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        overflow-x: auto;
        opacity: 0;
        transition: opacity 0.6s ease;
    }

    .accordion.open .details {
        opacity: 1;
    }
</style>
