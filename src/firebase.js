import Vue from "vue";
import * as firebase from 'firebase/app';
import 'firebase/auth';

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

export default {
	/* eslint-disable */
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
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