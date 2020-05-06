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
    import ('../views/Login.vue')
const Dashboard = () =>
    import ('../views/DashboardComponent.vue')

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
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router