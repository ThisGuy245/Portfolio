<script>
    export let skills = {
        "Main Languages": ["C++", "C#", "Python", "JavaScript", "TypeScript"],
        "Skills & Tools": ["Unreal Engine", "Unity", "PyTorch", "OpenGL", "SDL2", "Winsock"],
        "Web Development": ["Astro", "Svelte", "HTML", "CSS", "Node.js", "Flutter"]
    };

    // Normalize names for devicon use
    const iconMap = {
        "C++": "cplusplus",
        "C#": "csharp",
        "HTML": "html5",
        "CSS": "css3",
        "JavaScript": "javascript",
        "TypeScript": "typescript",
        "Python": "python",
        "Node.js": "nodejs",
        "Svelte": "svelte",
        "Astro": "astro",
        "Flutter": "dart",
        "Unity": "unity",
        "Unreal Engine": "unrealengine",
        "OpenGL": "opengl",
        "SDL2": "sdl",
        "PyTorch": "pytorch",
        "Winsock": "windows8" // fallback Windows icon
    };

    const getDeviconClass = (name) => {
        const iconName = iconMap[name];
        return iconName ? `devicon-${iconName}-plain colored` : "";
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
                        <li>
                            {#if getDeviconClass(item)}
                                <i class={getDeviconClass(item)} title={item}></i>
                            {/if}
                            <span>{item}</span>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</section>

<style>
    @import url('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css');

    .skills-section {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .skills-section h2 {
        font-size: 2.5rem;
        color: #bb86fc;
        margin-bottom: 2rem;
    }

    .skills-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        width: 100%;
    }

    .skill-category h3 {
        font-size: 1.5rem;
        color: #bb86fc;
        margin-bottom: 1rem;
    }

    .skill-category ul {
        list-style: none;
        padding: 0;
    }

    .skill-category li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        color: #e0e0e0;
        transition: color 0.3s ease;
    }

    .skill-category li:hover {
        color: #bb86fc;
    }

    i[class^="devicon-"] {
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        .skills-section {
            text-align: center;
            align-items: center;
        }

        .skill-category {
            text-align: center;
        }

        .skill-category li {
            justify-content: center;
        }
    }
</style>
