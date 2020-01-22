<template>
    <div id="auth-page">
        <FormHeader />
        <div id="sign-up-form">
            <h1>Sign up</h1>
            <p>Kindly fill in your details to sign up</p>
            <form>
                <input type="email" placeholder="Email">
                <input type="text" placeholder="Phone number">
                <input type="password" placeholder="Password">
                <input id="btn" type="button" value="Sign up">
            </form>
            <span id="sign-up">Not new to CNeMA? <a href="#/login">Sign in here</a> </span>
        </div>
        <Footer />
    </div>
</template>

<script>
    import FormHeader from './FormHeader'
    import Footer from './Footer'
    export default {
        name: "AuthPage",
        components: {
            FormHeader,
            Footer
        }
    }
</script>

<style scoped>
    #sign-up-form {
        width: 90%;
        margin: 10px auto 20px auto;
    }
    #sign-up-form h1, #sign-in-form p {
        color: #fff;
        margin-bottom: 10px;
    }
    #sign-up-form h1 {
        font-size: 2.5rem;
    }
    #sign-up-form p {
        margin-bottom: 20px;
        font-size: 1.05rem;
        color: #fff;
    }
    form {
        display: grid;
        margin: 10px 0 30px 0;
    }
    input {
        padding: 15px;
        margin-bottom: 15px;
        background-color: #070707;
        border: 0;
        outline: 0;
        color: #CFCFCF;
    }
    #btn {
        background-color: #CFCFCF;
        color: #070707;
        margin-top: 20px;
        font-size: 1.05rem;
        font-weight: 700;
        padding:10px 0;
    }
    #sign-up {
        color: #CFCFCF;
        font-size: 1rem;
    }
    a {
        margin-left: 5px;
        color: #fff;
        text-decoration: none;
    }
</style>