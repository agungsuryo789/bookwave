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
    import ('../views/LandingUser.vue')
const BookPage = () =>
    import ('../components/UserBookSection.vue')
const BookSearch = () =>
    import ('../views/BookSearch.vue')

const routes = [{
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
        path: '/books/search',
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