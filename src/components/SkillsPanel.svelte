<script>
    export let skills = {
        "Main Languages": ["C++", "C#", "Python", "JavaScript", "TypeScript"],
        "Skills & Tools": ["Unreal Engine", "Unity (Net Code)", "PyTorch + Keras", "OpenGL + SDL2", "Winsock for Windows"],
        "Web Development": ["Astro", "Svelte", "HTML/CSS", "Node.js", "Dart/Flutter"]
    };
</script>

<section class="skills-section">
    <h2>Skills</h2>
    <div class="skills-list">
        {#each Object.entries(skills) as [category, items]}
            <div class="skill-category">
                <h3>{category}</h3>
                <ul>
                    {#each items as item}
                        <li>{item}</li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</section>

<style>
    .skills-section {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .skills-section h2 {
        font-size: 2rem;
        color: #bb86fc;
        margin-bottom: 20px;
    }

    .skills-list {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        max-width: 500px;
        width: 100%;
    }

    .skill-category {
        text-align: center;
    }

    .skill-category h3 {
        font-size: 1.25rem;
        color: #bb86fc;
        margin-bottom: 10px;
    }

    .skill-category ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .skill-category li {
        font-size: 1rem;
        margin-bottom: 5px;
        transition: color 0.3s ease;
    }

    .skill-category li:hover {
        color: #bb86fc;
    }

    @media (min-width: 768px) {
        .skills-list {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            max-width: none;
        }

        .skill-category {
            text-align: left;
        }

        .skills-section {
            align-items: flex-start;
            text-align: left;
        }
    }
</style>
