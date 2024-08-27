<script lang="js">
    import BlogPostModal from './BlogPostModal.svelte';
    import { posts } from '../util/data'

    let selectedPost = null;
    let dialogue;

    function showModal(post) {
        console.log("BRUH")
        selectedPost = post;
        dialogue.show()
    }

    function closeModal() {
        selectedPost = null;
    }
</script>

<main>
    <h1>Blog Posts</h1>
    <div class="blog-posts">
        {#each posts as post}
            <div class="blog-card" on:click={() => showModal(post)}>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
                <p>{post.preview}</p>
            </div>
        {/each}
    </div>

    <dialog bind:this={dialogue} on:close={close}>
        <div class="modal-content">
            <!--<span class="close" on:click={close}>&times;</span>-->
            <h2>{selectedPost?.title}</h2>
            <p>{selectedPost?.date}</p>
            <div>{selectedPost?.content}</div>
        </div>
    </dialog>





</main>

<style>
    .blog-posts {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .blog-card {
        background: #23262d;
        padding: 1rem;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        color: #e0e0e0;

    }
    dialog {
        border: solid 1px black;
        position: fixed;
        left: 50%;
        top: 50%;
        background-color: white;
        z-index: 100;

        height: 400px;
        margin-top: -200px;

        width: 600px;
        margin-left: -300px;

        /*Testing*/
        opacity: 0;
        transform: scaleY(0);
        transition:
            opacity 0.7s ease-out,
            transform 0.7s ease-out,
            overlay 0.7s ease-out,
            display 0.7s ease-out;
    }
    dialog[open] {
        opacity: 1;
        transform: scaleY(1);
    }






    .blog-card:hover {
        background-color: #33363e;
    }
</style>
