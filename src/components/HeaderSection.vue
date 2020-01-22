<template>
    <div id="header-section">
        <Header />
        <Info />
    </div>
</template>

<script>
import Header from './Header'
import Info from './Info'
export default {
    components: {
        Header,
        Info
    }
}
</script>

<style scoped>
    #header-section {
        background-image: url("../assets/bg.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 70vh;
    }
</style>