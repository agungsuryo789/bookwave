import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VuexPersist from 'vuex-persistedstate';

Vue.use(Vuex, axios);

// AXIOS CONFIG
export const axs = axios.create({
    baseURL: "http://anditopi.com"
});
axs.interceptors.request.use(
    (config) => {
        const key = window.sessionStorage.getItem("x-api-key")
        const token = window.sessionStorage.getItem("x-token")
        if (key || token) {
            config.headers["x-api-key"] = key
            config.headers["x-token"] = token
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)
axs.interceptors.response.use(
    (config) => {
        const key = window.sessionStorage.getItem("x-api-key")
        const token = window.sessionStorage.getItem("x-token")
        if (key || token) {
            config.headers["x-api-key"] = key
            config.headers["x-token"] = token
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)
const vuexSession = new VuexPersist({
    reducer: state => ({
        daftarKategori: state.daftarKategori,
        bookListTrending: state.bookListTrending,
        bookListNew: state.bookListNew,
        episodeListNew: state.episodeListNew,
        bookListByKategori: state.bookListByKategori
    })
})
export default new Vuex.Store({
    plugins: [vuexSession],
    state: {
        daftarKategori: [],
        bookListTrending: [],
        bookListNew: [],
        episodeListNew: [],
        bookListByKategori: {}
    },
    mutations: {
        getKategori_mutation: (state, response) => {
            state.daftarKategori = response
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
        getBookByKategori_mutation: (state, response) => {
            state.bookListByKategori = response
        }
    },
    actions: {
        getKategori: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku_noauth')
                .then(response => {
                    commit('getKategori_mutation', response.data.daftar_kategori);
                })
        },
        getListBookTrending: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku_noauth')
                .then(response => {
                    commit('getListBookTrending_mutation', response.data.buku_trending);
                })
        },
        getListBookNew: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku_noauth')
                .then(response => {
                    commit('getListBookNew_mutation', response.data.buku_terbaru);
                })
        },
        getListEpisodeNew: ({ commit }) => {
            axs.get('/ahaapi/beranda_buku')
                .then(response => {
                    commit('getListEpisodeNew_mutation', response.data.audio_new);
                })
        },
        getBookByKategori: ({ commit }, categoryID) => {
            axs.get('/ahaapi/buku_by_kategori?id_kategori=' + categoryID)
                .then(response => {
                    if (response.status === 1) {
                        commit('getBookByKategori_mutation', response.data);
                    } else if (response.data.status === 0) {
                        console.log(response.data.message)
                    }
                })
        }
    }
});