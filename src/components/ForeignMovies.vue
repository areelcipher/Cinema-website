<template>
    <div id="foreign-movies">
        <div id="movie-info">
            <h1>Enjoy Foreign movies on your devices.</h1>
            <p>Watch old and new foreign movies on all your devices irrespective of the screen sizes.</p>
        </div>
        <div id="movie-img">
            <img src="../assets/foreign.png">
        </div>
    </div>
</template>

<script>
    export default {
        name: "fForeignMovies"
    }
</script>

<style scoped>
    #foreign-movies {
        width: 100%;
        background-color: #070707;
        margin: 10px 0;
        padding: 20px 0;
    }
    #movie-img {
        width: 95%;
        margin: 0 auto;
        overflow: hidden;
    }
   img:hover {
       transform: scale(1.2);
       filter: grayscale(60%);
    }
    img {
        width: 100%;
        transition: .5s ease-in;
    }
    h1 {
        font-size: 1.6rem;
        color: #CFCFCF;
        text-align: center;
        margin-bottom: 0.7rem;
        padding: 0 10px;
    }
    p {
        text-align: center;
        font-size: 1.1rem;
        color: #fff;
        padding: 0 10px 10px 10px;
    }
</style>