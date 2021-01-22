import axios from "axios";
// import router from "../../router";

// AXIOS CONFIG
export const axs = axios.create({
	baseURL: "https://api.ahabaca.com",
	timeout: 30000
	// withCredentials: false
});
axs.interceptors.request.use(
	config => {
		const key = "C94D74AC6115211E9531D5082CA97F2C";
		const token = window.localStorage.getItem("x-token");
		config.headers["x-api-key"] = key;
		if (token) {
			config.headers["x-token"] = token;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);
axs.interceptors.response.use(
	config => {
		const key = "C94D74AC6115211E9531D5082CA97F2C";
		const token = window.localStorage.getItem("x-token");
		config.headers["x-api-key"] = key;
		if (token) {
			config.headers["x-token"] = token;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

const defaultState = () => {
	return {
		loaderStatus: false,
		bookListByKategori: [],
		searchResult: [],
		searchResultAudio: [],
		searchResultLive: [],
		searchResultByBook: [],
		searchResultByPenulis: [],
		searchResultByKategori: []
	};
};

const state = defaultState();

const actions = {
	getSearchByDefault: ({ commit }, payload) => {
		axs.post("/ahaapi/pencarian", payload).then(response => {
			if (response.data) {
				commit("getSearchByDefault_mutation", response.data.data_buku);
			}
		});
	},
	getSearchByDefaultAudio: ({ commit }, payload) => {
		axs.post("/ahaapi/pencarian", payload).then(response => {
			if (response.data) {
				commit("getSearchByDefaultAudio_mutation", response.data.data_chapter);
			}
		});
	},
	getSearchByDefaultLive: ({ commit }, payload) => {
		axs.post("/ahaapi/pencarian", payload).then(response => {
			if (response.data) {
				commit("getSearchByDefaultLive_mutation", response.data.data_buku);
			}
		});
	},
	getSearchByBook: ({ commit }, payload) => {
		axs.post("/ahaapi/pencarian", payload).then(response => {
			if (response.data) {
				commit("getSearchByBook_mutation", response.data.data_buku);
			}
		});
	},
	getSearchByPenulis: ({ commit }, payload) => {
		axs.post("/ahaapi/pencarian", payload).then(response => {
			if (response.data) {
				commit("getSearchByPenulis_mutation", response.data.data_buku);
			}
		});
	},
	getSearchByKategori: ({ commit }, payload) => {
		axs.post("/ahaapi/pencarian", payload).then(response => {
			if (response.data) {
				commit("getSearchByKategori_mutation", response.data.data_buku);
			}
		});
	},
	getBookByKategori: ({ commit }, categoryID) => {
		axs.get("/ahaapi/buku_by_kategori?id_kategori=" + categoryID).then(
			response => {
				if (response.data) {
					commit("getBookByKategori_mutation", response.data);
				}
			}
		);
	},
	getBookByKategoriFilter: ({ commit }, payload) => {
		axs.get(
			"/ahaapi/buku_by_kategori?id_kategori=" +
				payload.id_kategori +
				"&search=" +
				payload.search
		).then(response => {
			if (response.data) {
				commit("getBookByKategoriFilter_mutation", response.data);
			}
		});
	}
};
const mutations = {
	resetState_mutation(state) {
		Object.assign(state, defaultState());
	},
	getSearchByDefault_mutation(state, response) {
		state.searchResult = response;
		state.loaderStatus = true;
	},
	getSearchByDefaultAudio_mutation(state, response) {
		state.searchResultAudio = response;
		state.loaderStatus = true;
	},
	getSearchByDefaultLive_mutation(state, response) {
		state.searchResultLive = response;
		state.loaderStatus = true;
	},
	getSearchByBook_mutation(state, response) {
		state.searchResultByBook = response;
		state.loaderStatus = true;
	},
	getSearchByPenulis_mutation(state, response) {
		state.searchResultByPenulis = response;
		state.loaderStatus = true;
	},
	getSearchByKategori_mutation(state, response) {
		state.searchResultByKategori = response;
		state.loaderStatus = true;
	},
	getBookByKategori_mutation: (state, response) => {
		state.bookListByKategori = response;
		state.loaderStatus = true;
	},
	getBookByKategoriFilter_mutation: (state, response) => {
		state.bookListByKategori = response;
		state.loaderStatus = true;
	}
};
const getters = {
	searchResultDefault: state => state.searchResult,
	searchResultDefaultAudio: state => state.searchResultAudio,
	searchResultByBook: state => state.searchResultByBook,
	searchResultByPenulis: state => state.searchResultByPenulis,
	searchResultByKategori: state => state.searchResultByKategori,
	searchResultDefaultLive: state => state.searchResultLive,
	bookListByKategori: state => state.bookListByKategori,
	loaderStatus: state => state.loaderStatus
};
export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
