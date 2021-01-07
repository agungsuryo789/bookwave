import Vue from "vue";
import axios from "axios";
Vue.use(axios);

// AXIOS CONFIG
export const axs = axios.create({
    baseURL: "https://api.ahabaca.com",
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

const state = {
    bookList: [],
    bookTrending: [],
    bookListTrending: [],
    bookListNew: [],
    episodeListNew: []
}

const mutations = {
    getBookTrending_mutation: (state, response) => {
        state.bookTrending = response
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
    }
}

const actions = {
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
        axs.get('/ahaapi/beranda_buku')
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
                commit('getBookTrending_mutation', response.data.data);
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
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
