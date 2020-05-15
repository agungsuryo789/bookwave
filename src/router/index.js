/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Lazy load route level
// Main layout
const Home = () =>
    import ('../views/Home.vue')
const About = () =>
    import ('../views/About.vue')
    // Auth layout
const Login = () =>
    import ('../views/auth/Login.vue')
const LoginEmail = () =>
    import ('../views/auth/LoginEmail.vue')
const Register = () =>
    import ('../views/auth/Register.vue')
const RegisterEmail = () =>
    import ('../views/auth/RegisterEmail.vue')
const LandingUser = () =>
    import ('../views/user/LandingUser.vue')
    // Page Layout
const UserBookSection = () =>
    import ('../components/user/UserBookSection.vue')
const SearchPage = () =>
    import ('../views/page/SearchPage.vue')
const PromoPage = () =>
    import ('../views/page/PromoPage.vue')
const MembershipPage = () =>
    import ('../views/page/MembershipPage.vue')
const CategoryPage = () =>
    import ('../views/page/CategoryPage.vue')
const BookPage = () =>
    import ('../views/page/BookPage.vue')

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
        path: '/login/email',
        name: 'LoginEmail',
        component: LoginEmail
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/register/email',
        name: 'RegisterEmail',
        component: RegisterEmail
    },
    {
        path: '/promo',
        name: 'PromoPage',
        component: PromoPage
    },
    {
        path: '/categories/:categoryID',
        name: 'CategoryPage',
        component: CategoryPage
    },
    //USER LAYOUT ROUTE
    {
        path: '/home',
        name: 'LandingUser',
        component: LandingUser
    },
    {
        path: '/home/:sectionName',
        name: 'UserBookSection',
        component: UserBookSection
    },
    {
        path: '/home/search',
        name: 'SearchPage',
        component: SearchPage
    },
    {
        path: '/plans',
        name: 'MembershipPage',
        component: MembershipPage
    },
    {
        path: '/books/:bookName',
        name: 'BookPage',
        component: BookPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router