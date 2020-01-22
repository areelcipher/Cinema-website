<template>
    <div id="info">
        <h1>Unlimited movies, TV shows and more.</h1>
        <p>Ready to watch, click the button below to register if you have not</p>
        <a href="#">Register</a>
    </div>
</template>

<script>
    export default {
        name: "Info"
    }
</script>

<style scoped>
    #info {
        position: relative;
        top: -15vh;
        margin: 0 auto;
        background-color: #1E1E1E;
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1 {
        color: #CFCFCF;
        text-align: center;
        font-size: 1.5rem;
        padding: 0 20px;
        margin-bottom: 20px;
    }
    p {
        color: #fff;
        text-align: center;
        padding: 0 20px;
    }
    a {
        text-align: center;
        background-color: #070707;
        width: 100px;
        margin-top: 20px;
        padding: 5px 10px;
        color: #CFCFCF;
        text-decoration: none;
        transition: 1s ease-in;
    }
    a:hover {
        transform: rotateY(180deg);
    }
</style>