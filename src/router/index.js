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
const LoginEmail = () =>
	import ('../views/auth/LoginEmail.vue')
const Register = () =>
	import ('../views/auth/Register.vue')
const RegisterEmail = () =>
	import ('../views/auth/RegisterEmail.vue')
const LandingUser = () =>
    import ('../views/user/LandingUser.vue')
const BookPage = () =>
    import ('../components/user/UserBookSection.vue')
const SearchPage = () =>
    import ('../views/SearchPage.vue')
const PromoPage = () =>
    import ('../views/PromoPage.vue')
const MembershipPage = () =>
    import ('../views/MembershipPage.vue')
const CategoryPage = () =>
	import ('../views/CategoryPage.vue')
const DisclaimerPage = () =>
    import ('../views/pages/DisclaimerPage.vue')

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
		name:'LoginEmail',
		component: LoginEmail
	},
	{
        path: '/register',
        name: 'Register',
        component: Register
	},
	{
		path: '/register/email',
		name:'RegisterEmail',
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
        path: '/userprivacy',
        name: 'UserPrivacy',
        component: UserPrivacy
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
        name: 'SearchPage',
        component: SearchPage
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