<template>
    <header>
        <nav>
            <div id="logo">
                <h1>CNeMA</h1>
            </div>
            <div id="login">
                <a href="#/login">Sign in</a>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    header {
        /*background: #1E1E1E;*/
        height: 30vh;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
    }

    #logo {
        margin: 0 0 0 20px;
    }

    #login {
        margin: 0 20px 0 0;
    }

    h1 {
        margin: 0;
        color: #CFCFCF;
        font-size: 1.5rem;
    }

    a {
        padding: 5px 10px;
        background-color: #1E1E1E;
        color: #CFCFCF;
        font-size: 1.05rem;
        text-decoration: none;
    }
</style>