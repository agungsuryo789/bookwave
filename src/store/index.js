import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VuexPersist from 'vuex-persistedstate';

Vue.use(Vuex, axios);

// const apiCookie = ("; " + document.cookie).split("; x-api-key=").pop().split(";").shift();

// AXIOS CONFIG
export const axs = axios.create({
    baseURL: "http://anditopi.com"
});
axs.interceptors.request.use(
    (config) => {
        const key = 'C94D74AC6115211E9531D5082CA97F2C'
        const token = window.localStorage.getItem("x-token")
        config.headers["x-api-key"] = key
        if (token) {
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
        const key = 'C94D74AC6115211E9531D5082CA97F2C'
        const token = window.localStorage.getItem("x-token")
        config.headers["x-api-key"] = key
        if (token) {
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
        bookListByKategori: state.bookListByKategori,
        kategoriId: state.kategoriId,
        bookId: state.bookId,
        bookDetail: state.bookDetail
    })
})

export default new Vuex.Store({
    plugins: [vuexSession],
    state: {
        daftarKategori: [],
        bookListTrending: [],
        bookListNew: [],
		user: [],
        episodeListNew: [],
        detailKategori: {},
        bookListByKategori: [],
        bookId: '',
        kategoriId: '',
        bookDetail: {}
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
		user_mutation: (state, response) => {
			state.user = response
		},
		authSuccess_mutation(state, token, email) {
			state.status = 'success'
			state.token = token
			state.email = email
        },
        getBookByKategori_mutation: (state, response) => {
            state.bookListByKategori = response
        },
        getBookDetailByID_mutation: (state, response) => {
            state.bookDetail = response
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
		userLogin: ({ commit }, user) => {
			axs.post('ahaapi/login_member', user)
				.then(response => {
					const token = response.data.token
					const email = response.data.email
					commit('authSuccess_mutation', token, email)
				})
		},
		userRegister: ({ commit }, user) => {
			axs.post('ahaapi/register_member', user)
				.then(response => {
					const token = response.data.token
					const email = response.data.email
					axios.defaults.headers.common['Authorization'] = token;
					commit('authSuccess_mutation', token, email)
				})
		}
	},
	getters: {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status

        },
        getBookByKategori: ({ commit }, categoryID) => {
            axs.get('/ahaapi/buku_by_kategori?id_kategori=' + categoryID)
                .then(response => {
                    commit('getBookByKategori_mutation', response.data);
                })
        },
        getBookDetailByID: ({ commit }, bookId) => {
            axs.get('/ahaapi/buku?id_buku=' + bookId)
                .then(response => {
                    commit('getBookDetailByID_mutation', response.data);
                })
        }
    }
);