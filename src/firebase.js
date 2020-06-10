import Vue from "vue";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Vuex from "vuex";
import axios from "axios";
import router from "./router"

Vue.use(Vuex, axios);

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
Vue.config.productionTip = false;
export const axs = axios.create({
    baseURL: "http://103.56.148.102",
    timeout: 30000
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

export default {
	/* eslint-disable */
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
		const email = result.user.email
		const pass = result.user.uid
		axs.post('ahaapi/login_member', {
			email: email,
			password: '',
			type: '2'
		})
		.then(response => {
			console.log(response)
			const token = response.data.token
			localStorage.setItem('x-token', token)
			router.push('/home');
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

	register() {
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
			  console.log(error.response.data)
			  const token = response.data.token
			  localStorage.setItem('x-token', token)
			  router.push('/home');
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
	loginfb() {
		const provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(provider)
		.then(function(result) {
		  console.log(result);
		})
		.catch(function(error) {
		  const errorCode = error.code;
		  const errorMessage = error.message;
		  const email = error.email;
		  const credential = error.credential;
		  console.log(errorCode, errorMessage, email, credential);
		  })
	  },
    logout() {
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error) {
		console.log(error)
	});
    }
}