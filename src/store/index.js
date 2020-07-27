import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import VuexPersist from 'vuex-persistedstate';
import * as firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(Vuex, axios);

// AXIOS CONFIG
export const axs = axios.create({
    baseURL: "https://backend.ahabaca.com",
    timeout: 30000
});
axs.interceptors.request.use(
    config => {
        const key = 'C94D74AC6115211E9531D5082CA97F2C'
        const token = window.localStorage.getItem("x-token")
        config.headers["x-api-key"] = key
        if (token) {
            config.headers["x-token"] = token
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
axs.interceptors.response.use(
    config => {
        const key = 'C94D74AC6115211E9531D5082CA97F2C'
        const token = window.localStorage.getItem("x-token")
        config.headers["x-api-key"] = key
        if (token) {
            config.headers["x-token"] = token
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCZKqh1-bs_9iS2HHx6YDZ159MAw0CxRJ4",
    authDomain: "aha-project-d39ef.firebaseapp.com",
    databaseURL: "https://aha-project-d39ef.firebaseio.com",
    projectId: "aha-project-d39ef",
    storageBucket: "aha-project-d39ef.appspot.com",
    messagingSenderId: "412849291381",
    appId: "1:412849291381:web:a4a0098111c9c01c16783c",
    measurementId: "G-HVT7P9KW8P"
};
firebase.initializeApp(firebaseConfig);

// Vuex Persistedstated for caching data
const vuexSession = new VuexPersist({
    key: 'a7ac33d1966354c33537e0584f42d58d',
    reducer: state => ({
        daftarKategoriNoAuth: state.daftarKategoriNoAuth,
        daftarKategoriAuth: state.daftarKategoriAuth,
        bookListTrendingNoAuth: state.bookListTrendingNoAuth,
        bookBerandaAuth: state.bookBerandaAuth,
        bookSectionList: state.bookSectionList,
        bookTrending: state.bookTrending,
        bookNew: state.bookNew
    })
})

export default new Vuex.Store({
    plugins: [vuexSession],
    state: {
        loaderStatus: false,
        daftarKategoriNoAuth: [],
        topKategoriNoAuth: [],
        daftarKategoriAuth: [],
        bookSectionList: [],
        bookTrending: [],
        bookNew: [],
        bookListTrendingNoAuth: [],
        bookBerandaAuth: {},
        status: '',
        premiumStatus: null,
        memberDetail: {},
        token: window.localStorage.getItem('x-token') || '',
        email: {},
        episodeListNew: [],
        detailKategori: {},
        bookListByKategori: [],
        bookListByKategoriNoAuth: [],
        bookId: '',
        kategoriId: '',
        bookDetail: {},
        bookOutline: {},
        chapterDetail: {},
        intisariDetail: {},
        bookStatus: {},
        bookFavorit: {},
        bookBookmarked: {},
        chapterHighlight: {},
        subList: [],
        promoList: [],
        searchResult: {},
        searchResultByBook: {},
        searchResultByPenulis: {},
        searchResultByKategori: {},
        koleksiBuku: {},
        koleksiBukuFav: {},
        koleksiBukuHighlight: {},
        koleksiAudio: {},
        koleksiTag: {},
        koleksiTagSingle: [],
        delTagRes: {},
        addTagRes: {},
        editTagRes: {},
        paymentHistoryList: [],
        invoiceDetails: {},
        midtransToken: '',
        snackbar: {
            visible: false,
            text: null,
            timeout: 6000,
            multiline: false,
            color: 'cyan darken-2'
        },
        termsCondition: [],
        blogCategory: [],
        userPrivacy: [],
        applicationPrivacy: [],
        disclaimer: [],
        aboutUs: [],
        contactUs: [],
        career: [],
        detailCareer: [],
        listBlog: [],
        listSearchBlog: [],
        detailBlog: []
    },
    mutations: {
        getKategoriNoAuth_mutation: (state, response) => {
            state.daftarKategoriNoAuth = response
            state.loaderStatus = true
        },
        getTopKategoriNoAuth_mutation: (state, response) => {
            state.topKategoriNoAuth = response
            state.loaderStatus = true
        },
        getSearchByDefault_mutation(state, response) {
            state.searchResult = response
            state.loaderStatus = true
        },
        getSearchByBook_mutation(state, response) {
            state.searchResultByBook = response
            state.loaderStatus = true
        },
        getSearchByPenulis_mutation(state, response) {
            state.searchResultByPenulis = response
            state.loaderStatus = true
        },
        getSearchByKategori_mutation(state, response) {
            state.searchResultByKategori = response
            state.loaderStatus = true
        },
        getBookTrending_mutation: (state, response) => {
            state.bookSectionList = response
            state.bookTrending = response
            state.loaderStatus = true
        },
        getBookNew_mutation: (state, response) => {
            state.bookSectionList = response
            state.bookNew = response
            state.loaderStatus = true
        },
        getListBookTrendingNoAuth_mutation: (state, response) => {
            state.bookListTrendingNoAuth = response
            state.loaderStatus = true
        },
        getBerandaBukuAuth_mutation: (state, response) => {
            state.bookBerandaAuth = response
            state.loaderStatus = true
        },
        getDaftarKategoriAuth_mutation: (state, response) => {
            state.daftarKategoriAuth = response
            state.loaderStatus = true
        },
        user_mutation: (state, response) => {
            state.user = response
        },
        authSuccess_mutation: (state, response) => {
            state.status = 'success'
            state.token = response.data.token
            localStorage.setItem('x-token', response.data.token)
            state.notifMessage = response.data.message
            router.push('/home')
        },
        authError_mutation: (state, response) => {
            state.snackbar.text = response
            state.snackbar.visible = true
            location.reload()
                // router.push({ name: 'Login' })
        },
        registerError_mutation: (state, response) => {
            state.snackbar.text = response
            state.snackbar.visible = true
            location.reload()
                // router.push({ name: 'Register' })
        },
        authDown_mutation: (state) => {
            state.status = null
            state.token = null
            state.premiumStatus = null
            Object.assign(state)
            router.push('/')
        },
        getMemberDetail_mutation: (state, response) => {
            state.memberDetail = response
            state.premiumStatus = response.data[0].premium_member
            state.loaderStatus = true
        },
        getBookByKategori_mutation: (state, response) => {
            state.bookListByKategori = response
            state.loaderStatus = true
        },
        getBookByKategoriNoAuth_mutation: (state, response) => {
            state.bookListByKategoriNoAuth = response
            state.loaderStatus = true
        },
        getBookDetailByID_mutation: (state, response) => {
            state.bookDetail = response
            state.loaderStatus = true
        },
        getBookOutline_mutation: (state, response) => {
            state.bookOutline = response
            state.loaderStatus = true
        },
        getBookChapter_mutation: (state, response) => {
            state.chapterDetail = response
            state.loaderStatus = true
        },
        getBookIntisari_mutation: (state, response) => {
            state.intisariDetail = response
            state.loaderStatus = true
        },
        setBookDone_mutation: (state, response) => {
            state.bookStatus = response
            state.loaderStatus = true
            router.push("/", () => {})
        },
        setDeleteKoleksi_mutation: (state, response) => {
            state.bookStatus = response
            state.loaderStatus = true
            window.history.go()
        },
        setBookFavorit_mutation: (state, response) => {
            state.bookFavorit = response
            state.loaderStatus = true
            router.push("/library/book")
        },
        setBookmark_mutation: (state, response) => {
            state.bookBookmarked = response
            state.loaderStatus = true
            window.history.go()
        },
        getSubsOption_mutation: (state, response) => {
            state.subList = response
            state.loaderStatus = true
        },
        getBlogCategory_mutation: (state, response) => {
            state.blogCategory = response
            state.loaderStatus = true
        },
        setChapterHighlight_mutation: (state, response) => {
            state.chapterHighlight = response
            state.loaderStatus = true
            location.reload()
        },
        addTag_mutation: (state, response) => {
            state.addTagRes = response
            state.loaderStatus = true
            router.push("/library/tag")
        },
        editTagRes_mutation: (state, response) => {
            state.editTagRes = response
            state.loaderStatus = true
            router.push("/library/book")
        },
        delTagRes_mutation: (state, response) => {
            state.delTagRes = response
            state.loaderStatus = true
            router.push("/library/book")
        },
        saveChapterSingle_mutation: (state, response) => {
            location.reload()
        },
        setDelChapterHighlight_mutation: (state, response) => {
            state.chapterHighlight = response
            state.loaderStatus = true
            location.reload()
        },
        koleksiBuku_mutation: (state, response) => {
            state.koleksiBuku = response
            state.loaderStatus = true
        },
        koleksiBukuFav_mutation: (state, response) => {
            state.koleksiBukuFav = response
            state.loaderStatus = true
        },
        koleksiBukuHighlight_mutation: (state, response) => {
            state.koleksiBukuHighlight = response
            state.loaderStatus = true
        },
        koleksiAudio_mutation: (state, response) => {
            state.koleksiAudio = response
            state.loaderStatus = true
        },
        koleksiTag_mutation: (state, response) => {
            state.koleksiTag = response
            state.loaderStatus = true
        },
        koleksiTagSingle_mutation: (state, response) => {
            state.koleksiTagSingle = response
            state.loaderStatus = true
        },
        invoiceDetail_mutation: (state, response) => {
            state.invoiceDetails = response
            state.loaderStatus = true
        },
        getPaymentHistory_mutation: (state, response) => {
            state.paymentHistoryList = response
            state.loaderStatus = true
        },
        getPromo_mutation: (state, response) => {
            state.promoList = response
            state.loaderStatus = true
        },
        invoiceSubsDownload_mutation: (state, response) => {
            state.invoiceDownloadDetail = response
            state.loaderStatus = true
        },
        midtransToken_mutation: (state, response) => {
            state.midtransToken = response
            state.loaderStatus = true
        },
        notifMessage_mutation: (state, response) => {
            state.notifMessage = response.data.message
        },
        showSnackbar(state, response) {
            state.snackbar.text = response
            state.snackbar.timeout = 3000
            state.snackbar.visible = true
        },
        closeSnackbar(state) {
            state.snackbar.visible = false
            state.snackbar.multiline = false
            state.snackbar.timeout = 6000
            state.snackbar.text = null
        },
        getTerms_mutation: (state, response) => {
            state.termsCondition = response
        },
        getUserPrivacy_mutation: (state, response) => {
            state.userPrivacy = response
        },
        getApplicationPrivacy_mutation: (state, response) => {
            state.applicationPrivacy = response
        },
        getDisclaimer_mutation: (state, response) => {
            state.disclaimer = response
            state.loaderStatus = true
        },
        getAbout_mutation: (state, response) => {
            state.aboutUs = response
        },
        getContact_mutation: (state, response) => {
            state.contactUs = response
        },
        getCareer_mutation: (state, response) => {
            state.career = response
        },
        getBlog_mutation: (state, response) => {
            state.listBlog = response
        },
        blogSearch_mutation: (state, response) => {
            state.listSearchBlog = response
        },
        searchBlogByCategory_mutation: (state, response) => {
            state.listBlog = response
        },
        getBlogDetail_mutation: (state, response) => {
            state.detailBlog = response
        },
        getCareerDetail_mutation: (state, response) => {
            state.detailCareer = response
        }
    },
    actions: {
        // No Auth Action
        getKategoriNoAuth: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku_noauth')
                .then(response => {
                    commit('getKategoriNoAuth_mutation', response.data.daftar_kategori);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getTopKategoriNoAuth: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku_noauth')
                .then(response => {
                    commit('getTopKategoriNoAuth_mutation', response.data.top_kategori);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getListBookTrendingNoAuth: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku_noauth')
                .then(response => {
                    commit('getListBookTrendingNoAuth_mutation', response.data.buku_trending);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        // Auth Action
        // Book GET
        getBerandaBukuAuth: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku')
                .then(response => {
                    commit('getBerandaBukuAuth_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getBookNew: ({ commit }) => {
            axs.get('/ahaapi/buku_terbaru')
                .then(response => {
                    commit('getBookNew_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getBookTrending: ({ commit }) => {
            axs.get('/ahaapi/buku_trending')
                .then(response => {
                    commit('getBookTrending_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getDaftarKategoriAuth: ({ commit }) => {
            axs.get('/ahaapi/daftar_kategori')
                .then(response => {
                    commit('getDaftarKategoriAuth_mutation', response.data.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        // Book Search Action
        getSearchByDefault: ({ commit }, payload) => {
            axs.post('/ahaapi/pencarian', payload)
                .then(response => {
                    commit('getSearchByDefault_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getSearchByBook: ({ commit }, payload) => {
            axs.post('/ahaapi/pencarian', payload)
                .then(response => {
                    commit('getSearchByBook_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getSearchByPenulis: ({ commit }, payload) => {
            axs.post('/ahaapi/pencarian', payload)
                .then(response => {
                    commit('getSearchByPenulis_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getSearchByKategori: ({ commit }, payload) => {
            axs.post('/ahaapi/pencarian', payload)
                .then(response => {
                    commit('getSearchByKategori_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getBookByKategori: ({ commit }, categoryID) => {
            axs.get('/ahaapi/buku_by_kategori?id_kategori=' + categoryID)
                .then(response => {
                    commit('getBookByKategori_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getBookByKategoriNoAuth: ({ commit }, categoryID) => {
            axs.get('/ahaapi/buku_by_kategori_noauth?id_kategori=' + categoryID)
                .then(response => {
                    commit('getBookByKategoriNoAuth_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getBookByKategoriFilter: ({ commit }, payload) => {
            axs.get('/ahaapi/buku_by_kategori?id_kategori=' + payload.id_kategori + '&search=' + payload.search)
                .then(response => {
                    commit('getBookByKategoriFilter_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        // Book n Chapter ACtion
        getBookDetailByID: ({ commit }, bookId) => {
            axs.get('/ahaapi/buku?id_buku=' + bookId)
                .then(response => {
                    commit('getBookDetailByID_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getBookChapter: ({ commit }, dispatchPayload) => {
            axs.get('/ahaapi/chapter?id_buku=' + dispatchPayload.bookId + '&id_chapter=' + dispatchPayload.chapterId)
                .then(response => {
                    commit('getBookChapter_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getBookOutline: ({ commit }, bookId) => {
            axs.get('/ahaapi/outline_buku?id_buku=' + bookId)
                .then(response => {
                    commit('getBookOutline_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getBookIntisari: ({ commit }, dispatchPayload) => {
            axs.get('/ahaapi/intisari?id_buku=' + dispatchPayload)
                .then(response => {
                    commit('getBookIntisari_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        setBookDone: ({ commit }, payloadDone) => {
            axs.post('/ahaapi/selesai_baca', payloadDone)
                .then(response => {
                    commit('setBookDone_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        setBookmark: ({ commit }, payloadBookmark) => {
            axs.post('/ahaapi/simpan_buku', payloadBookmark)
                .then(response => {
                    commit('setBookmark_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        setDeleteKoleksi: ({ commit }, payloadFav) => {
            axs.post('/ahaapi/hapus_koleksi_buku', payloadFav)
                .then(response => {
                    commit('setDeleteKoleksi_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        setBookFavorit: ({ commit }, payloadFav) => {
            axs.post('/ahaapi/tambah_favorite', payloadFav)
                .then(response => {
                    commit('setBookFavorit_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        delBookFavorit: ({ commit }, payloadFav) => {
            axs.post('/ahaapi/hapus_favorite', payloadFav)
                .then(response => {
                    commit('setBookFavorit_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        setChapterHighlight: ({ commit }, highlightPayload) => {
            axs.post('/ahaapi/highlight_chapter', highlightPayload)
                .then(response => {
                    commit('setChapterHighlight_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        setDelChapterHighlight: ({ commit }, delHighlightPayload) => {
            axs.post('/ahaapi/hapus_highlight', delHighlightPayload)
                .then(response => {
                    commit('setDelChapterHighlight_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        saveChapterSingle: ({ commit }, payload) => {
            axs.post('/ahaapi/tambah_audio', payload)
                .then(response => {
                    commit('saveChapterSingle_mutation');
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        addTag: ({ commit }, tagPayload) => {
            axs.post('/ahaapi/tambah_tag', tagPayload)
                .then(response => {
                    commit('addTag_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        editTagAll: ({ commit }, tagPayload) => {
            axs.post('/ahaapi/ubah_tag', tagPayload)
                .then(response => {
                    commit('editTagRes_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        deleteTagFromAll: ({ commit }, tagPayload) => {
            axs.post('/ahaapi/hapus_tag', tagPayload)
                .then(response => {
                    router.push("/library/book");
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        deleteTagByBook: ({ commit }, tagPayload) => {
            axs.post('/ahaapi/hapus_tag', tagPayload)
                .then(response => {
                    router.push("/home");
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        // Book Library GET
        koleksiBuku: ({ commit }) => {
            axs.get('/ahaapi/koleksi_buku_member')
                .then(response => {
                    commit('koleksiBuku_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        koleksiBukuFav: ({ commit }) => {
            axs.get('/ahaapi/koleksi_buku_favorit')
                .then(response => {
                    commit('koleksiBukuFav_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        koleksiBukuHighlight: ({ commit }) => {
            axs.get('/ahaapi/koleksi_buku_highlight')
                .then(response => {
                    commit('koleksiBukuHighlight_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        koleksiAudio: ({ commit }) => {
            axs.get('/ahaapi/koleksi_audio_member')
                .then(response => {
                    commit('koleksiAudio_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        koleksiTag: ({ commit }) => {
            axs.get('/ahaapi/list_tag')
                .then(response => {
                    commit('koleksiTag_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        koleksiTagSingle: ({ commit }, tagPayload) => {
            axs.get('/ahaapi/tag_buku?tag=' + tagPayload)
                .then(response => {
                    commit('koleksiTagSingle_mutation', response.data.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        // Payment n Plans
        getSubsOption: ({ commit }) => {
            axs.get('/ahaapi/list_subscription')
                .then(response => {
                    commit('getSubsOption_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getPromo: ({ commit }) => {
            axs.get('/ahaapi/banner')
                .then(response => {
                    commit('getPromo_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getBlogCategory: ({ commit }) => {
            axs.get('/ahaapi/blog_category')
                .then(response => {
                    commit('getBlogCategory_mutation', response.data.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        blogSearch: ({ commit }, payload) => {
            axs.post('/ahaapi/pencarian_blog', payload)
                .then(response => {
                    commit('blogSearch_mutation', response.data.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        searchBlogByCategory: ({ commit }, payload) => {
            axs.get('/ahaapi/blog_by_category?id_category=' + payload)
                .then(response => {
                    commit('searchBlogByCategory_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        invoiceDetails: ({ commit }, data) => {
            axs.post('/ahaapi/invoices', data)
                .then(response => {
                    window.location = 'https://app.sandbox.midtrans.com/snap/v2/vtweb/' + response.data.token;
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        invoiceSubsDownload: ({ commit }, payload) => {
            axs.get('/ahaapi/download_invoice?id_transaksi=' + payload)
                .then(response => {
                    commit('invoiceSubsDownload_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getPaymentHistory: ({ commit }) => {
            axs.get('/ahaapi/riwayat_pembayaran')
                .then(response => {
                    commit('getPaymentHistory_mutation', response.data.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        // auth action
        getMemberDetail: ({ commit }) => {
            axs.get('ahaapi/member')
                .then(response => {
                    commit('getMemberDetail_mutation', response.data)
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        userLogin: ({ commit }, user) => {
            axs.post('ahaapi/login_member', user)
                .then(response => {
                    console.log(response)
                    commit('authSuccess_mutation', response)
                    commit('showSnackbar', response.data.message)
                })
                .catch(err => {
                    // commit('showSnackbar', 'Login Gagal! Periksa Email dan Password Anda')
                    commit('authError_mutation', 'Login Gagal! Periksa Email dan Password Anda')
                    console.log(err.message)
                })
        },
        userRegister: ({ commit }, user) => {
            axs.post('ahaapi/register_member', user)
                .then(response => {
                    console.log(response)
                    commit('authSuccess_mutation', response)
                    commit('showSnackbar', response.data.message)
                })
                .catch(err => {
                    commit('registerError_mutation', 'Email Sudah Terdaftar!')
                    console.log(err.message)
                })
        },
        loginFirebase: ({ commit }) => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then(function(result) {
                    const email = result.user.email
                    axs.post('ahaapi/login_member', {
                            email: email,
                            password: '',
                            type: '3'
                        })
                        .then(response => {
                            commit('authSuccess_mutation', response)
                        })
                })
                .catch(function(error) {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const email = error.email;
                    const credential = error.credential;
                    console.log(errorCode, errorMessage, email, credential);
                })
        },
        loginFacebook: ({ commit }) => {
            const provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then(function(result) {
                    console.log(result)
                    const email = result.user.email
                    axs.post('ahaapi/login_member', {
                            email: email,
                            password: '',
                            type: '2'
                        })
                        .then(response => {
                            commit('authSuccess_mutation', response)
                        })
                })
                .catch(function(error) {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const email = error.email;
                    const credential = error.credential;
                    console.log(errorCode, errorMessage, email, credential);
                })
        },
        registerFirebase: ({ commit }) => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then(function(result) {
                    // const email = result.user.email
                    const email = result.user.email
                    const pass = result.user.uid
                    console.log(result)
                    axs.post('ahaapi/register_member', {
                            email: email,
                            password: pass,
                            type: '2'
                        })
                        .then(response => {
                            commit('authSuccess_mutation', response)
                        })
                })
                .catch(function(error) {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const email = error.email;
                    const credential = error.credential;
                    const dataer = error.response.data;
                    console.log(errorCode, errorMessage, email, credential, dataer);
                })
        },
        userLogout: ({ commit }, user) => {
            return new Promise((resolve, reject) => {
                commit('authDown_mutation')
                localStorage.removeItem('x-token')
                resolve()
            })
        },
        forgotPassword: ({ commit }, data) => {
            axs.post('/ahaapi/lupa_password', data)
                .then(response => {
                    console.log(response.data)
                    commit('showSnackbar', response.data.message)
                        // commit('notifMessage_mutation', response.data.message)
                        // console.log(response.data.message)
                })
        },
        resetPassword: ({ commit }, token) => {
            console.log(token)
            localStorage.setItem('x-token', token)
        },
        goReset: ({ commit }, data) => {
            axs.post('/ahaapi/ubah_password', data)
                .then(response => {
                    console.log(response.data)
                    commit('showSnackbar', response.data.message)
                    localStorage.removeItem('x-token')
                    router.push('/login')
                })
                .catch(err => {
                    console.log(err.message)
                    commit('showSnackbar', err.message)
                })
        },

        // Footerpage action
        getTerms: ({ commit }) => {
            axs.get('/ahaapi/ketentuan')
                .then(response => {
                    commit('getTerms_mutation', response.data)
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getUserPrivacy: ({ commit }) => {
            axs.get('/ahaapi/privasi_user')
                .then(response => {
                    commit('getUserPrivacy_mutation', response.data)
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getApplicationPrivacy: ({ commit }) => {
            axs.get('/ahaapi/privasi_aplikasi')
                .then(response => {
                    commit('getApplicationPrivacy_mutation', response.data)
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getDisclaimer: ({ commit }) => {
            axs.get('/ahaapi/disclaimer')
                .then(response => {
                    commit('getDisclaimer_mutation', response.data)
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getAbout: ({ commit }) => {
            axs.get('/ahaapi/about')
                .then(response => {
                    commit('getAbout_mutation', response.data)
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getContact: ({ commit }) => {
            axs.get('/ahaapi/contact')
                .then(response => {
                    commit('getContact_mutation', response.data)
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getCareer: ({ commit }) => {
            axs.get('/ahaapi/karir')
                .then(response => {
                    commit('getCareer_mutation', response.data)
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getBlog: ({ commit }) => {
            axs.get('/ahaapi/blog')
                .then(response => {
                    commit('getBlog_mutation', response.data)
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getBlogDetail: ({ commit }, idBlog) => {
            axs.get('/ahaapi/detail_blog?id=' + idBlog)
                .then(response => {
                    commit('getBlogDetail_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message)
                })
        },
        getCareerDetail: ({ commit }, idKarir) => {
            axs.get('/ahaapi/detail_karir?id=' + idKarir)
                .then(response => {
                    commit('getCareerDetail_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message)
                })
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        premiumStatus: state => state.premiumStatus,
        invoiceDownloadDetail: state => state.invoiceDownloadDetail
    }
});