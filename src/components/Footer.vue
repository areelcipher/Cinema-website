<template>
    <footer>
        <h1>CNeMA</h1>
        <ul>
            <li>
                <a href="#">
                    <i class="fab fa-dribbble"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fab fa-figma"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fab fa-twitter"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fab fa-github"></i>
                </a>
            </li>
        </ul>
        <p>AreelDev Copyright &copy; 2020</p>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    footer {
        width: 100%;
        background-color: #070707;
        margin: 10px auto 0 auto;
        padding: 20px 10px;
        box-sizing: border-box;
    }
    h1 {
        color: #CFCFCF;
        text-align: center;
        font-size: 1.5rem;
        width: 80%;
        margin: 0 auto 10px auto;
    }
    ul {
        display: flex;
        justify-content: space-around;
        margin: 20px auto;
        padding: 0;
    }
    li {
        list-style: none;
    }
    a {
        color: #fff;
    }
    p {
        color: #CFCFCF;
        text-align: center;
    }
</style>