import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import VuexPersist from 'vuex-persistedstate';

Vue.use(Vuex, axios);

// AXIOS CONFIG
export const axs = axios.create({
    baseURL: "http://103.56.148.102",
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

// Vuex Persistedstated for caching data
const vuexSession = new VuexPersist({
    key: 'a7ac33d1966354c33537e0584f42d58d',
    reducer: state => ({
        daftarKategori: state.daftarKategori,
        bookListTrending: state.bookListTrending,
        bookListNew: state.bookListNew,
        episodeListNew: state.episodeListNew,
        bookListByKategori: state.bookListByKategori,
        bookDetail: state.bookDetail,
        chapterDetail: state.chapterDetail,
        bookList: state.bookList,
        koleksiBuku: state.koleksiBuku,
        koleksiBukuFav: state.koleksiBukuFav,
        koleksiBukuHighlight: state.koleksiBukuHighlight,
        koleksiAudio: state.koleksiAudio,
        koleksiTag: state.koleksiTag,
        koleksiTagSingle: state.koleksiTagSingle
    })
})

export default new Vuex.Store({
    plugins: [vuexSession],
    state: {
        loaderStatus: false,
        daftarKategori: [],
        bookList: [],
        bookListTrending: [],
        bookListNew: [],
        status: '',
        token: window.localStorage.getItem('x-token') || '',
        email: {},
        episodeListNew: [],
        detailKategori: {},
        bookListByKategori: [],
        bookId: '',
        kategoriId: '',
        bookDetail: {},
        chapterDetail: {},
        bookStatus: {},
        bookFavorit: {},
        bookBookmarked: {},
        chapterHighlight: {},
        subList: [],
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
        invoiceDetails: {},
        midtransToken: ''
    },
    mutations: {
        getKategori_mutation: (state, response) => {
            state.daftarKategori = response
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
            state.bookList = response
            state.loaderStatus = true
        },
        getBookNew_mutation: (state, response) => {
            state.bookList = response
            state.loaderStatus = true
        },
        getListBookTrending_mutation: (state, response) => {
            state.bookListTrending = response
            state.loaderStatus = true
        },
        getListBookNew_mutation: (state, response) => {
            state.bookListNew = response
            state.loaderStatus = true
        },
        getListEpisodeNew_mutation: (state, response) => {
            state.episodeListNew = response
            state.loaderStatus = true
        },
        user_mutation: (state, response) => {
            state.user = response
        },
        authSuccess_mutation: (state, token) => {
            state.status = 'success'
            state.token = token
            router.push('/home')
        },
        authError_mutation: (state) => {
            state.status = 'error'
        },
        authDown_mutation: (state) => {
            state.status = ''
            state.token = ''
            Object.assign(state)
            router.push('/')
        },
        getBookByKategori_mutation: (state, response) => {
            state.bookListByKategori = response
            state.loaderStatus = true
        },
        getBookDetailByID_mutation: (state, response) => {
            state.bookDetail = response
            state.loaderStatus = true
        },
        getBookChapter_mutation: (state, response) => {
            state.chapterDetail = response
            state.loaderStatus = true
        },
        setBookDone_mutation: (state, response) => {
            state.bookStatus = response
            state.loaderStatus = true
            alert("Selamat!! kamu sudah selesai membaca buku ini ^_^")
            router.push('/library')
        },
        setDeleteKoleksi_mutation: (state, response) => {
            state.bookStatus = response
            state.loaderStatus = true
            alert("Buku berhasil dihapus dari koleksi")
            router.push('/library')
        },
        setBookFavorit_mutation: (state, response) => {
            state.bookFavorit = response
            state.loaderStatus = true
            location.reload()
        },
        setBookmark_mutation: (state, response) => {
            state.bookBookmarked = response
            state.loaderStatus = true
            location.reload()
        },
        getSubsOption_mutation: (state, response) => {
            state.subList = response
            state.loaderStatus = true
        },
        setChapterHighlight_mutation: (state, response) => {
            state.chapterHighlight = response
            state.loaderStatus = true
            location.reload()
        },
        setDelChapterHighlight_mutation: (state, response) => {
            state.chapterHighlight = response
            state.loaderStatus = true
            alert("Berhasil hapus highligth text")
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
        midtransToken_mutation: (state, response) => {
            state.midtransToken = response
            state.loaderStatus = true
        }
    },
    actions: {
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
        getKategori: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku_noauth')
                .then(response => {
                    commit('getKategori_mutation', response.data.daftar_kategori);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getListBookTrending: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku_noauth')
                .then(response => {
                    commit('getListBookTrending_mutation', response.data.buku_trending);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getListBookNew: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku_noauth')
                .then(response => {
                    commit('getListBookNew_mutation', response.data.buku_terbaru);
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
        getBookNew: ({ commit }) => {
            axs.get('/ahaapi/buku_terbaru')
                .then(response => {
                    commit('getBookNew_mutation', response.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getListEpisodeNew: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku')
                .then(response => {
                    commit('getListEpisodeNew_mutation', response.data.audio_new);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        getSubsOption: ({ commit }) => {
            axs.get('/ahaapi/list_subscription')
                .then(response => {
                    commit('getSubsOption_mutation', response.data);
                    console.log(response)
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
        koleksiBuku: ({ commit }) => {
            axs.get('/ahaapi/koleksi_buku_member')
                .then(response => {
                    commit('koleksiBuku_mutation', response.data.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        koleksiBukuFav: ({ commit }) => {
            axs.get('/ahaapi/koleksi_buku_favorit')
                .then(response => {
                    commit('koleksiBukuFav_mutation', response.data.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        koleksiBukuHighlight: ({ commit }) => {
            axs.get('/ahaapi/koleksi_buku_highlight')
                .then(response => {
                    commit('koleksiBukuHighlight_mutation', response.data.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        koleksiAudio: ({ commit }) => {
            axs.get('/ahaapi/koleksi_audio_member')
                .then(response => {
                    commit('koleksiAudio_mutation', response.data.data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        koleksiTag: ({ commit }) => {
            axs.get('/ahaapi/tag_buku')
                .then(response => {
                    commit('koleksiTag_mutation', response.data.data);
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
        invoiceDetails: ({ commit }, data) => {
            console.log(data)
            axs.post('/ahaapi/invoices', data)
                .then(response => {
                    window.location = 'https://app.sandbox.midtrans.com/snap/v2/vtweb/' + response.data.token;
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        // auth action
        userLogin: ({ commit }, user) => {
            console.log(user)
            axs.post('ahaapi/login_member', user)
                .then(response => {
                    const token = response.data.token
                    localStorage.setItem('x-token', token)
                    commit('authSuccess_mutation', token)
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        userRegister: ({ commit }, user) => {
            console.log(user)
            axs.post('ahaapi/register_member', user)
                .then(response => {
                    const token = response.data.token
                    commit('authSuccess_mutation', token)
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        userLogout: ({ commit }, user) => {
                return new Promise((resolve, reject) => {
                    commit('authDown_mutation')
                    localStorage.removeItem('x-token')
                    resolve()
                })
            }
            // end auth action
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status
    }
});