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
const BlogList = () =>
	import ('../views/pages/BlogList.vue')
const Career = () =>
	import ('../views/pages/CareerPage.vue')
const BlogDetail = () =>
	import ('../views/pages/BlogDetail.vue')
const CareerDetail = () =>
	import ('../views/pages/CareerDetail.vue')
const Troubleshoot = () =>
	import ('../views/pages/Troubleshoot.vue')
const TroubleshootDetail = () =>
	import ('../views/pages/TroubleshootDetail.vue')

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
const Profile = () =>
	import ('../views/user/Profile.vue')

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
			ifLoggedIn: true,
			title: "Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: "About | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            ifLoggedIn: true,
            title: "Login | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/forgot',
        name: 'ForgotPassword',
        component: ForgotPassword,
        meta: {
            title: "Forgot Password | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/reset/:token',
        name: 'ResetPassword',
        component: ResetPassword,
        meta: {
            title: "Reset Password | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/login/email',
        name: 'LoginEmail',
        component: LoginEmail,
        meta: {
            ifLoggedIn: true,
            title: "Login | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            ifLoggedIn: true,
            title: "Register | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/register/email',
        name: 'RegisterEmail',
        component: RegisterEmail,
        meta: {
            ifLoggedIn: true,
            title: "Register | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/disclaimer',
        name: 'DisclaimerPage',
        component: DisclaimerPage,
        meta: {
            title: "Disclaimer | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/sitemap',
        name: 'SitemapPage',
        component: SitemapPage,
        meta: {
            title: "Sitemap | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/usersprivacy',
        name: 'UsersPrivacy',
        component: UsersPrivacy,
        meta: {
            title: "User Privacy | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/terms',
        name: 'TermsCondition',
        component: TermsCondition,
        meta: {
            title: "Term & Condition | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/privacy',
        name: 'AppPrivacy',
        component: AppPrivacy,
        meta: {
            title: "Privacy | Ahabaca: lets you read hundred of books collection"
        }
	},
	{
        path: '/blog',
        name: 'BlogList',
        component: BlogList,
        meta: {
            title: "Blog | Ahabaca: lets you read hundred of books collection"
        }
	},
	{
        path: '/blog/:idBlog',
        name: 'BlogDetail',
        component: BlogDetail,
        meta: {
            title: "Blog | Ahabaca: lets you read hundred of books collection"
        }
    },
	{
        path: '/career',
        name: 'Career',
        component: Career,
        meta: {
            title: "Career | Ahabaca: lets you read hundred of books collection"
        }
	},
	{
        path: '/career/:idKarir',
        name: 'CareerDetail',
        component: CareerDetail,
        meta: {
            title: "Career | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/faq',
        name: 'Faq',
        component: Faq,
        meta: {
            title: "Faq | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {
            title: "Contact AHA | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/partnership',
        name: 'PartnersPage',
        component: PartnersPage,
        meta: {
            title: "Partnership | Ahabaca: lets you read hundred of books collection"
        }
	},
	{
        path: '/help',
        name: 'HelpSupport',
        component: HelpSupport,
        meta: {
			requiresAuth: true,
            title: "Help & Support | Ahabaca: lets you read hundred of books collection"
        }
	},
	{
        path: '/troubleshoot',
        name: 'Troubleshoot',
        component: Troubleshoot,
        meta: {
            title: "Troubleshoot | Ahabaca: lets you read hundred of books collection"
        }
	},
	{
        path: '/troubleshoot/:idBantuan',
        name: 'TroubleshootDetail',
        component: TroubleshootDetail,
        meta: {
            title: "Troubleshoot | Ahabaca: lets you read hundred of books collection"
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
            title: "Home | Ahabaca: lets you read hundred of books collection"
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
            title: "Search AHA | Ahabaca: lets you read hundred of books collection"
        }
	},
	{
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            requiresAuth: true,
            title: "My Account | Ahabaca: lets you read hundred of books collection"
        }
    },
    // Main Feature Layout
    {
        path: '/categories/:idKategori',
        name: 'CategoryPage',
        component: CategoryPage,
        meta: {
            requiresAuth: true,
            title: "Category | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/books/:bookId/:bookName',
        name: 'BookPage',
        component: BookPage,
        meta: {
			requiresAuth: true,
			title: "Read Book | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/read/:bookId/:chapterId',
        name: 'BookChapter',
        component: BookChapter,
        meta: {
			requiresAuth: true,
			title: "Read Chapter | Ahabaca: lets you read hundred of books collection"
        }
    },
    // User Layout
    {
        path: '/user/payment-history',
        name: 'PaymentHistoryView',
        component: PaymentHistoryView,
        meta: {
            requiresAuth: true,
            title: "Payment History | Ahabaca: lets you read hundred of books collection"
        }
    },
    // Promo etc Layout
    {
        path: '/promo',
        name: 'PromoPage',
        component: PromoPage,
        meta: {
            title: "Promo AHA | Ahabaca: lets you read hundred of books collection"
        }
    },
    {
        path: '/plans',
        name: 'MembershipPage',
        component: MembershipPage,
        meta: {
            title: "Membership AHA | Ahabaca: lets you read hundred of books collection"
        }
    },

    // Library Layout
    {
        path: '/library',
        name: 'LibraryPage',
        component: LibraryPage,
        meta: {
            requiresAuth: true,
            title: "My Library | Ahabaca: lets you read hundred of books collection"
        },
        children: [{
                path: 'book',
                component: LibraryBook,
                meta: {
                    requiresAuth: true,
                    title: "My Library | Ahabaca: lets you read hundred of books collection"
                },
            },
            {
                path: 'episode',
                component: LibraryEpisode,
                meta: {
                    requiresAuth: true,
                    title: "My Library | Ahabaca: lets you read hundred of books collection"
                },
            },
            {
                path: 'highlighted',
                component: LibraryColour,
                meta: {
                    requiresAuth: true,
                    title: "My Library | Ahabaca: lets you read hundred of books collection"
                },
            },
            {
                path: 'favorite',
                component: LibraryFav,
                meta: {
                    requiresAuth: true,
                    title: "My Library | Ahabaca: lets you read hundred of books collection"
                },
            },
            {
                path: 'tag',
                component: LibraryTag,
                meta: {
                    requiresAuth: true,
                    title: "My Library | Ahabaca: lets you read hundred of books collection"
                },
            },
            {
                path: 'add-tag/:idBuku',
                name: 'LibraryTagAdd',
                component: LibraryTagAdd,
                meta: {
                    requiresAuth: true,
                    title: "My Library | Ahabaca: lets you read hundred of books collection"
                },
            }
        ]

    },
    // Page not Found Route
    {
        path: '*',
        name: 'catchAll',
        component: PageNotFound,
        meta: {
            title: "Not Found | Ahabaca: lets you read hundred of books collection"
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