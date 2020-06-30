/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

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
const Faq = () =>
    import ('../views/pages/Faq.vue')
const Contact = () =>
    import ('../views/pages/ContactUs.vue')
const PartnersPage = () =>
	import ('../views/pages/PartnersPage.vue')
const HelpSupport = () =>
    import ('../views/pages/HelpSupport.vue')

// Auth Component
const Login = () =>
    import ('../views/auth/Login.vue')
const LoginEmail = () =>
    import ('../views/auth/LoginEmail.vue')
const Register = () =>
    import ('../views/auth/Register.vue')
const RegisterEmail = () =>
    import ('../views/auth/RegisterEmail.vue')
const ForgotPassword = () =>
    import ('../views/auth/ForgotPassword.vue')
const ResetPassword = () =>
    import ('../views/auth/ResetPassword.vue')

// User Component
const LandingUser = () =>
    import ('../views/user/LandingUser.vue')

// Main feature Component
const BookPage = () =>
    import ('../views/main/BookPage.vue')
const LandingBookSection = () =>
    import ('../components/landing/LandingBookSection.vue')
const SearchPage = () =>
    import ('../views/main/SearchPage.vue')
const CategoryPage = () =>
    import ('../views/main/CategoryPage.vue')
const BookChapter = () =>
    import ('../views/main/BookChapter.vue')
const PaymentHistoryView = () =>
    import ('../views/user/PaymentHistoryView.vue')

// Pricing Component
const PromoPage = () =>
    import ('../views/product/PromoPage.vue')
const MembershipPage = () =>
    import ('../views/product/MembershipPage.vue')

// Library Component
const LibraryPage = () =>
    import ('../views/user/LibraryPage.vue')
const LibraryBook = () =>
    import ('../components/library/LibraryBookList.vue')
const LibraryEpisode = () =>
    import ('../components/library/LibraryEpisodeList.vue')
const LibraryColour = () =>
    import ('../components/library/LibraryColouredList.vue')
const LibraryFav = () =>
    import ('../components/library/LibraryFavoriteList.vue')
const LibraryTag = () =>
    import ('../components/library/LibraryTagList.vue')
const LibraryTagAdd = () =>
    import ('../components/library/librarytag/LibraryTagAdd.vue')

// Page Not Found
const PageNotFound = () =>
    import ('../views/notfound/PageNotFound.vue')


const routes = [
    //Main Layout (No Auth)
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            ifLoggedIn: true
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: "About | Ahabaca"
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            ifLoggedIn: true,
            title: "Login | Ahabaca"
        }
    },
    {
        path: '/forgot',
        name: 'ForgotPassword',
        component: ForgotPassword,
        meta: {
            title: "Forgot Password | Ahabaca"
        }
    },
    {
        path: '/reset',
        name: 'ResetPassword',
        component: ResetPassword,
        meta: {
            requiresAuth: true,
            title: "Reset Password | Ahabaca"
        }
    },
    {
        path: '/login/email',
        name: 'LoginEmail',
        component: LoginEmail,
        meta: {
            ifLoggedIn: true,
            title: "Login | Ahabaca"
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            ifLoggedIn: true,
            title: "Register | Ahabaca"
        }
    },
    {
        path: '/register/email',
        name: 'RegisterEmail',
        component: RegisterEmail,
        meta: {
            ifLoggedIn: true,
            title: "Register | Ahabaca"
        }
    },
    {
        path: '/disclaimer',
        name: 'DisclaimerPage',
        component: DisclaimerPage,
        meta: {
            title: "Disclaimer | Ahabaca"
        }
    },
    {
        path: '/sitemap',
        name: 'SitemapPage',
        component: SitemapPage,
        meta: {
            title: "Sitemap | Ahabaca"
        }
    },
    {
        path: '/usersprivacy',
        name: 'UsersPrivacy',
        component: UsersPrivacy,
        meta: {
            title: "User Privacy | Ahabaca"
        }
    },
    {
        path: '/terms',
        name: 'TermsCondition',
        component: TermsCondition,
        meta: {
            title: "Term & Condition | Ahabaca"
        }
    },
    {
        path: '/privacy',
        name: 'AppPrivacy',
        component: AppPrivacy,
        meta: {
            title: "Privacy | Ahabaca"
        }
    },
    {
        path: '/faq',
        name: 'Faq',
        component: Faq,
        meta: {
            title: "Faq | Ahabaca"
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {
            title: "Contact AHA | Ahabaca"
        }
    },
    {
        path: '/partnership',
        name: 'PartnersPage',
        component: PartnersPage,
        meta: {
            title: "Partnership | Ahabaca"
        }
	},
	{
        path: '/help',
        name: 'HelpSupport',
        component: HelpSupport,
        meta: {
			requiresAuth: true,
            title: "Help & Support | Ahabaca"
        }
    },
    // User Layout (Auth)
    // Landing Layout
    {
        path: '/home',
        name: 'LandingUser',
        component: LandingUser,
        meta: {
            requiresAuth: true,
            title: "Home | Ahabaca"
        }
    },
    {
        path: '/home/:sectionName',
        name: 'LandingBookSection',
        component: LandingBookSection,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/home/search/:searchParams',
        name: 'SearchPage',
        component: SearchPage,
        meta: {
            requiresAuth: true,
            title: "Search AHA | Ahabaca"
        }
    },
    // Main Feature Layout
    {
        path: '/categories/:idKategori',
        name: 'CategoryPage',
        component: CategoryPage,
        meta: {
            requiresAuth: true,
            title: "Category | Ahabaca"
        }
    },
    {
        path: '/books/:bookId/:bookName',
        name: 'BookPage',
        component: BookPage,
        meta: {
			requiresAuth: true,
			title: "Read Book | Ahabaca"
        }
    },
    {
        path: '/read/:bookId/:chapterId',
        name: 'BookChapter',
        component: BookChapter,
        meta: {
			requiresAuth: true,
			title: "Read Chapter | Ahabaca"
        }
    },
    // User Layout
    {
        path: '/user/payment-history',
        name: 'PaymentHistoryView',
        component: PaymentHistoryView,
        meta: {
            requiresAuth: true,
            title: "Payment History | Ahabaca"
        }
    },
    // Promo etc Layout
    {
        path: '/promo',
        name: 'PromoPage',
        component: PromoPage,
        meta: {
            title: "Promo AHA | Ahabaca"
        }
    },
    {
        path: '/plans',
        name: 'MembershipPage',
        component: MembershipPage,
        meta: {
            title: "Membership AHA | Ahabaca"
        }
    },

    // Library Layout
    {
        path: '/library',
        name: 'LibraryPage',
        component: LibraryPage,
        meta: {
            requiresAuth: true,
            title: "My Library | Ahabaca"
        },
        children: [{
                path: 'book',
                component: LibraryBook,
            },
            {
                path: 'episode',
                component: LibraryEpisode,
            },
            {
                path: 'highlighted',
                component: LibraryColour,
            },
            {
                path: 'favorite',
                component: LibraryFav,
            },
            {
                path: 'tag',
                component: LibraryTag,
            },
            {
                path: 'add-tag/:idBuku',
                name: 'LibraryTagAdd',
                component: LibraryTagAdd
            }
        ]

    },
    // Page not Found Route
    {
        path: '*',
        name: 'catchAll',
        component: PageNotFound,
        meta: {
            title: "Not Found | Ahabaca"
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            window.document.title = to.meta && to.meta.title ? to.meta.title : 'Ahabaca';
            next()
            window.scrollTo(0, 0)
            return
        }
        window.document.title = to.meta && to.meta.title ? to.meta.title : 'Ahabaca';
        next('/login')
        window.scrollTo(0, 0)
    } else {
        window.document.title = to.meta && to.meta.title ? to.meta.title : 'Ahabaca';
        next()
        window.scrollTo(0, 0)
    }
    if (to.matched.some(record => record.meta.ifLoggedIn)) {
        if (store.getters.isLoggedIn) {
            window.document.title = to.meta && to.meta.title ? to.meta.title : 'Ahabaca';
            next('/home')
            window.scrollTo(0, 0)
            return
        }
        window.document.title = to.meta && to.meta.title ? to.meta.title : 'Ahabaca';
        next()
        window.scrollTo(0, 0)
    } else {
        window.document.title = to.meta && to.meta.title ? to.meta.title : 'Ahabaca';
        next()
        window.scrollTo(0, 0)
    }
})

export default router