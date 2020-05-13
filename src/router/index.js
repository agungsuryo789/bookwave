/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Lazy load route level
const Home = () =>
    import ('../views/Home.vue')
const About = () =>
    import ('../views/About.vue')
const Login = () =>
    import ('../views/auth/Login.vue')
const Register = () =>
    import ('../views/auth/Register.vue')
const LandingUser = () =>
    import ('../views/user/LandingUser.vue')
const BookPage = () =>
    import ('../components/UserBookSection.vue')
const BookSearch = () =>
    import ('../views/BookSearch.vue')
const PromoPage = () =>
    import ('../views/PromoPage.vue')
const SubcriptionPage = () =>
    import ('../views/SubcriptionPage.vue')

const routes = [
    //MAIN LAYOUT ROUTE
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/promo',
        name: 'PromoPage',
        component: PromoPage
    },
    {
        path: '/plans',
        name: 'SubcriptionPage',
        component: SubcriptionPage
    },
    //USER LAYOUT ROUTE
    {
        path: '/home',
        name: 'LandingUser',
        component: LandingUser
    },
    {
        path: '/home/book-page',
        name: 'BookPage',
        component: BookPage
    },
    {
        path: '/home/search',
        name: 'BookSearch',
        component: BookSearch
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router