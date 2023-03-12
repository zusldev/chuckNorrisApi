<script lang="ts">
    import { getSpanishJoke } from "./lib/Api";
    import { onMount } from "svelte";
    import Categories from "./lib/Categories.svelte";

    let joke = "";

    onMount(async () => {
        joke = await getSpanishJoke();
    });
</script>

<main class="flex flex-col justify-center items-center min-h-screen">
    <div class="container-main">
        <h1 class="title text-3xl text-center mt-6">
            <span
                class="bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-800 font-semibold"
            >
                Frases de
            </span>
            Chuck Norris
            <span
                class="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 font-semibold"
            >
                traducidas al español
            </span>
        </h1>
        <div class="container-img relative">
            <a
                href="https://api.chucknorris.io/#!"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    id="chucknorris"
                    src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
                    class="img shadow-md ml-11"
                    alt="chucknorris img"
                />
            </a>
        </div>
        <div class="categories">
            <Categories />
        </div>
        <div class="profile bottom-0 mb-8 mt-5 ">
            Made by:
            <a
                href="https://github.com/zusldev"
                target="_blank"
                rel="noreferrer"
                class="flex items-center px-2 mt-2 py-1 bg-red-500/30 hover:bg-[#1C3151] rounded-lg shadow-md"
            >
                <img
                    id="dev"
                    src="https://avatars.githubusercontent.com/u/75233351?v=4"
                    class="h-10 w-10 object-cover rounded-full mr-2"
                    alt="profile"
                />
                <span class="text-white text-sm ">@zusldev</span>
            </a>
        </div>
    </div>
</main>

<style>
    /* .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
        border: 2px solid #646cff;
        border-radius: 10%;
    } */

    .container-img {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }

    #chucknorris:hover {
        filter: drop-shadow(0 0 2em #ff4000ce);
    }

    .container-main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
        position: relative; /* agrega esta línea */
    }
</style>
