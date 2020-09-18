import axios from "axios";

export const axs = axios.create({
	baseURL: "https://backend.ahabaca.com",
	timeout: 30000
});
export function execute() {
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
}
