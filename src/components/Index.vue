<template>
    <div id="index" >
        <HeaderSection />
        <Movies />
        <Footer />
    </div>
</template>

<script>
import HeaderSection from './HeaderSection'
import Movies from "./Movies";
import Footer from './Footer'
    export default {
        components: {
            Movies,
            HeaderSection,
            Footer
        }
    }
</script>

<style scoped>

</style>