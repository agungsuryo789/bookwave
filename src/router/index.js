/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Lazy load route level
// No-Auth Component
const Home = () =>
    import ('../views/Home.vue')
const About = () =>
    import ('../views/About.vue')
const DisclaimerPage = () =>
    import ('../views/pages/DisclaimerPage.vue')
const SitemapPage = () =>
    import ('../views/pages/SitemapPage.vue')
const AppPrivacy = () =>
    import ('../views/pages/AppPrivacy.vue')
const UsersPrivacy = () =>
    import ('../views/pages/UsersPrivacy.vue')
const TermsCondition = () =>
    import ('../views/pages/TermsCondition.vue')

// Auth Component
const Login = () =>
    import ('../views/auth/Login.vue')
const LoginEmail = () =>
    import ('../views/auth/LoginEmail.vue')
const Register = () =>
    import ('../views/auth/Register.vue')
const RegisterEmail = () =>
    import ('../views/auth/RegisterEmail.vue')

// User Component
const LandingUser = () =>
    import ('../views/user/LandingUser.vue')

// Main feature Component
const BookPage = () =>
    import ('../views/main/BookPage.vue')
const UserBookSection = () =>
    import ('../components/user/UserBookSection.vue')
const SearchPage = () =>
    import ('../views/main/SearchPage.vue')
const CategoryPage = () =>
    import ('../views/main/CategoryPage.vue')
const BookChapter = () =>
    import ('../views/main/BookChapter.vue')

// Pricing Component
const PromoPage = () =>
    import ('../views/page/PromoPage.vue')
const MembershipPage = () =>
    import ('../views/page/MembershipPage.vue')

const routes = [
    //Main Layout (No Auth)
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
        path: '/disclaimer',
        name: 'DisclaimerPage',
        component: DisclaimerPage
    },
    {
        path: '/sitemap',
        name: 'SitemapPage',
        component: SitemapPage
    },
    {
        path: '/usersprivacy',
        name: 'UsersPrivacy',
        component: UsersPrivacy
    },
    {
        path: '/terms',
        name: 'TermsCondition',
        component: TermsCondition
    },
    {
        path: '/privacy',
        name: 'AppPrivacy',
        component: AppPrivacy
    },
    // User Layout (Auth)
    // Landing Layout
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
    // Main Feature Layout
    {
        path: '/categories/:idKategori',
        name: 'CategoryPage',
        component: CategoryPage
    },
    {
        path: '/books/:bookId/:bookName',
        name: 'BookPage',
        component: BookPage,
    },
    {
        path: '/books/:bookId/:bookName/read',
        name: 'BookChapter',
        component: BookChapter,
    },
    // Promo etc Layout
    {
        path: '/promo',
        name: 'PromoPage',
        component: PromoPage
    },
    {
        path: '/plans',
        name: 'MembershipPage',
        component: MembershipPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router