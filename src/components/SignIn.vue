<template>
    <div id="auth-page">
        <FormHeader />
        <div id="sign-in-form">
            <h1>Sign in</h1>
            <p>Sign in to start watching</p>
            <form>
                <input type="text" placeholder="Email or phone number">
                <input type="password" placeholder="Password">
                <input id="btn" type="button" value="Sign in">
                <div id="remember-me">
                    <input type="checkbox">
                    <label>Remember me</label>
                </div>
            </form>
            <span id="sign-up">New to CNeMA? <a href="#/signup">Sign up now</a> </span>
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
    #sign-in-form {
        width: 90%;
        margin: 10px auto 20px auto;
    }
    #sign-in-form h1, #sign-in-form p {
        color: #fff;
        margin-bottom: 10px;
    }
    #sign-in-form h1 {
        font-size: 2.5rem;
    }
    #sign-in-form p {
        margin-bottom: 20px;
        font-size: 1.05rem;
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
        padding: 10px 0;
    }
    #remember-me {
        display: flex;
        align-items: center;
    }
    #remember-me input {
        margin: 0 10px 0 0;
    }
    #remember-me label {
        color: #CFCFCF;
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