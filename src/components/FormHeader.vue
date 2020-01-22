<template>
    <header>
        <h1><a href="#/">CNeMA</a></h1>
    </header>
</template>

<script>
    export default {
        name: "FormHeader"
    }
</script>

<style scoped>
    header {
        height: 50px;
        display: flex;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        padding: 10px 0;
    }
    h1 a {
        color: #CFCFCF;
        font-size: 1.5rem;
        text-decoration: none;
    }
</style>