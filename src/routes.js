import Index from './components/Index'
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp";

export default [
    {path: '/', component: Index},
    {path: '/login', component: SignIn},
    {path: '/signup', component: SignUp}
]