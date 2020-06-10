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
        component: About
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            ifLoggedIn: true
        }
    },
    {
        path: '/login/email',
        name: 'LoginEmail',
        component: LoginEmail,
        meta: {
            ifLoggedIn: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            ifLoggedIn: true
        }
    },
    {
        path: '/register/email',
        name: 'RegisterEmail',
        component: RegisterEmail,
        meta: {
            ifLoggedIn: true
        }
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
    {
        path: '/faq',
        name: 'Faq',
        component: Faq
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/partnership',
        name: 'PartnersPage',
        component: PartnersPage
    },
    // User Layout (Auth)
    // Landing Layout
    {
        path: '/home',
        name: 'LandingUser',
        component: LandingUser,
        meta: {
            requiresAuth: true
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
            requiresAuth: true
        }
    },
    // Main Feature Layout
    {
        path: '/categories/:idKategori',
        name: 'CategoryPage',
        component: CategoryPage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/books/:bookId/:bookName',
        name: 'BookPage',
        component: BookPage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/read/:bookId/:chapterId',
        name: 'BookChapter',
        component: BookChapter,
        meta: {
            requiresAuth: true
        }
    },
    // User Layout
    {
        path: '/user/payment-history',
        name: 'PaymentHistoryView',
        component: PaymentHistoryView,
        meta: {
            requiresAuth: true
        }
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
    },

    // Library Layout
    {
        path: '/library',
        name: 'LibraryPage',
        component: LibraryPage,
        meta: {
            requiresAuth: true
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
        component: PageNotFound
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
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
    if (to.matched.some(record => record.meta.ifLoggedIn)) {
        if (store.getters.isLoggedIn) {
            next('/home')
            return
        }
        next()
    } else {
        next()
    }
})

export default router