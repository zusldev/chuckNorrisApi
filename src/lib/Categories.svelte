<script>
    import TailwindCSS from "./../TailwindCSS.svelte";
    import { onMount } from "svelte";
    import translateToSpanish from "./Translate";

    export const categories = [
        "animal",
        "career",
        "celebrity",
        "dev",
        "explicit",
        "fashion",
        "food",
        "history",
        "money",
        "movie",
        "music",
        "political",
        "religion",
        "science",
        "sport",
        "travel",
    ];

    export let selectedCategory = categories[0];
    let joke = "";

    export async function getRandomJoke() {
        const response = await fetch(
            `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
        );
        const data = await response.json();
        joke = data.value;
        joke = await translateToSpanish(joke);

        console.log(selectedCategory);
    }

    onMount(async () => {
        await getRandomJoke();
    });

    function handleCategoryChange(event) {
        selectedCategory = event.target.value;
        getRandomJoke();
    }

    async function generateNewJoke() {
        await getRandomJoke();
    }
</script>

<TailwindCSS />
<h1 class="text-lg font-bold mb-2">Select a category:</h1>
<div class="flex flex-wrap gap-2">
    {#each categories as category}
        <button
            class="py-2 px-4 rounded-lg text-white hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 {selectedCategory ===
            category
                ? 'bg-[#1C3151] text-white'
                : 'bg-[#511C1C]'} shadow-md transition duration-300 ease-in-out transform hover:scale-95 {category ===
            'animal'
                ? ''
                : ''}"
            on:click={() => {
                selectedCategory = category;
                getRandomJoke();
            }}
        >
            {category}
        </button>
    {/each}
</div>

<!--Button to generate new joke in the active category-->
<div class="color">
    <button
        class="py-2 px-4 rounded-lg text-white bg-[#511C1C] hover:bg-[#1C3151] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        on:click={generateNewJoke}
    >
        Generar nueva frase
    </button>
</div>

<div class="card-joke">
    <p>{joke}</p>
</div>

<style>
    .card-joke {
        margin-top: 25px;
        min-height: 150px;
        min-width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f7000036;
        border-radius: 10px;
        padding: 1em;
        position: relative;
    }
</style>
