<template>
    <div id="movies">
        <LocalMovies />
        <ForeignMovies />
    </div>
</template>

<script>
    import LocalMovies from './LocalMovies'
    import ForeignMovies from "./ForeignMovies";
    export default {
        name: "Movies",
        components: {
            ForeignMovies,
            LocalMovies
        }
    }
</script>

<style scoped>
    #movies {
        background-color: inherit;
    }
</style>