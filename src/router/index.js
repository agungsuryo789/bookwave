/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// route level Lazy Load
const About = () =>
    import ('../views/About.vue')
const Home = () =>
    import ('../views/Home.vue')
const Login = () =>
    import ('../views/Login.vue')

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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router