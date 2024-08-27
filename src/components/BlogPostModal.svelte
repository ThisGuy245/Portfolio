<script>
    import {posts} from "../util/data.js";

    export let selectedPost;

    selectedPost = posts
    function close() {
        const dialog = document.getElementById('post-dialog');
        dialog.close();
    }
</script>

<dialog id="post-dialog" on:close={close}>
    <div class="modal-content">
        <span class="close" on:click={close}>&times;</span>
        <h2>{selectedPost.title}</h2>
        <p>{selectedPost.date}</p>
        <div>{selectedPost.content}</div>
    </div>
</dialog>

<style>
    .modal-content {
        color: #e0e0e0;
        padding: 1rem;
        background: #23262d;
        border-radius: 10px;
    }
    .close {
        cursor: pointer;
        color: #bb86fc;
    }
</style>
