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
<<<<<<< HEAD
	import ('../views/auth/Login.vue')
const LoginEmail = () =>
	import ('../components/auth/LoginEmail.vue')
const PasswordEmail = () =>
	import ('../components/auth/PasswordEmail.vue')
=======
    import ('../views/auth/Login.vue')
>>>>>>> 2f80849e967457ad2e5357a8c0c4c31f45f90eda
const Register = () =>
    import ('../views/auth/Register.vue')
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
<<<<<<< HEAD
		component: Login,
		children: [
			{
				path: '/login/',
				name: "LoginOptions",
				component: LoginOptions				
			},
			{
				path: '/login/email',
				name: "LoginEmail",
				component: LoginEmail				
			},
			{
				path: '/login/password',
				name: "PasswordEmail",
				component: PasswordEmail				
			}
		]
	},
	{
=======
        component: Login
    },
    {
>>>>>>> 2f80849e967457ad2e5357a8c0c4c31f45f90eda
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