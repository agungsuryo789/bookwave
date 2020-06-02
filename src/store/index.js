import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import VuexPersist from 'vuex-persistedstate';

Vue.use(Vuex, axios);

// const apiCookie = ("; " + document.cookie).split("; x-api-key=").pop().split(";").shift();

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
const vuexSession = new VuexPersist({
    key: 'a7ac33d1966354c33537e0584f42d58d',
    reducer: state => ({
        daftarKategori: state.daftarKategori,
        bookListTrending: state.bookListTrending,
        bookListNew: state.bookListNew,
        episodeListNew: state.episodeListNew,
        bookListByKategori: state.bookListByKategori,
        bookDetail: state.bookDetail,
        kategoriId: state.kategoriId,
        bookId: state.bookId,
        chapterDetail: state.chapterDetail,
        bookList: state.bookList,
        searchResult: state.searchResult
    })
})

export default new Vuex.Store({
    plugins: [vuexSession],
    state: {
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
        chapterHighlight: {},
        subList: [],
        searchResult: []
    },
    mutations: {
        getKategori_mutation: (state, response) => {
            state.daftarKategori = response
        },
        getSearch_mutation: (state, response) => {
            state.searchResult = response
        },
        getBookTrending_mutation: (state, response) => {
            state.bookList = response
        },
        getBookNew_mutation: (state, response) => {
            state.bookList = response
        },
        getListBookTrending_mutation: (state, response) => {
            state.bookListTrending = response
        },
        getListBookNew_mutation: (state, response) => {
            state.bookListNew = response
        },
        getListEpisodeNew_mutation: (state, response) => {
            state.episodeListNew = response
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
            location.reload()
        },
        getBookByKategori_mutation: (state, response) => {
            state.bookListByKategori = response
        },
        getBookDetailByID_mutation: (state, response) => {
            state.bookDetail = response
        },
        getBookChapter_mutation: (state, response) => {
            state.chapterDetail = response
        },
        setBookDone_mutation: (state, response) => {
            state.bookStatus = response
            alert("Selamat!! kamu sudah selesai membaca buku ini ^_^")
            router.push('/library')
        },
        setDeleteKoleksi_mutation: (state, response) => {
            state.bookStatus = response
            alert("Buku berhasil dihapus dari koleksi")
            router.push('/library')
        },
        setBookFavorit_mutation: (state, response) => {
            state.bookFavorit = response
            location.reload()
        },
        getSubsOption_mutation: (state, response) => {
            state.subList = response
        },
        setChapterHighlight_mutation: (state, response) => {
            state.chapterHighlight = response
        }
    },
    actions: {
        getSearch: ({ commit }, payload) => {
            axs.post('/ahaapi/pencarian', payload)
                .then(response => {
                    commit('getSearch_mutation', response.data.data_buku);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        getKategori: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku_noauth')
                .then(response => {
                    commit('getKategori_mutation', response.data.daftar_kategori);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        getListBookTrending: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku_noauth')
                .then(response => {
                    commit('getListBookTrending_mutation', response.data.buku_trending);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        getListBookNew: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku_noauth')
                .then(response => {
                    commit('getListBookNew_mutation', response.data.buku_terbaru);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        getBookTrending: ({ commit }) => {
            axs.get('/ahaapi/buku_trending')
                .then(response => {
                    commit('getBookTrending_mutation', response.data);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        getBookNew: ({ commit }) => {
            axs.get('/ahaapi/buku_terbaru')
                .then(response => {
                    commit('getBookNew_mutation', response.data);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        getListEpisodeNew: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku')
                .then(response => {
                    commit('getListEpisodeNew_mutation', response.data.audio_new);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        getSubsOption: ({ commit }) => {
            axs.get('/ahaapi/list_subscription')
                .then(response => {
                    commit('getSubsOption_mutation', response.data);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        getBookByKategori: ({ commit }, categoryID) => {
            axs.get('/ahaapi/buku_by_kategori?id_kategori=' + categoryID)
                .then(response => {
                    commit('getBookByKategori_mutation', response.data);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        getBookDetailByID: ({ commit }, bookId) => {
            axs.get('/ahaapi/buku?id_buku=' + bookId)
                .then(response => {
                    commit('getBookDetailByID_mutation', response.data);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        getBookChapter: ({ commit }, dispatchPayload) => {
            axs.get('/ahaapi/chapter?id_buku=' + dispatchPayload.bookId + '&id_chapter=' + dispatchPayload.chapterId)
                .then(response => {
                    commit('getBookChapter_mutation', response.data);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        setBookDone: ({ commit }, payloadDone) => {
            axs.post('/ahaapi/selesai_baca', payloadDone)
                .then(response => {
                    commit('setBookDone_mutation', response.data);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        setDeleteKoleksi: ({ commit }, payloadFav) => {
            axs.post('/ahaapi/hapus_koleksi_buku', payloadFav)
                .then(response => {
                    commit('setDeleteKoleksi_mutation', response.data);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        setBookFavorit: ({ commit }, payloadFav) => {
            axs.post('/ahaapi/tambah_favorite', payloadFav)
                .then(response => {
                    commit('setBookFavorit_mutation', response.data);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        setChapterHighlight: ({ commit }, highlightPayload) => {
            axs.post('/ahaapi/highlight_chapter', highlightPayload)
                .then(response => {
                    commit('setChapterHighlight_mutation', response.data);
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        // auth action
        userLogin: ({ commit }, user) => {
            axs.post('ahaapi/login_member', user)
                .then(response => {
                    const token = response.data.token
                    localStorage.setItem('x-token', token)
                    commit('authSuccess_mutation', token)
                })
                .catch(err => {
                    alert(err.message);
                })
        },
        userRegister: ({ commit }, user) => {
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