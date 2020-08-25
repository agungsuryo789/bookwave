/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
//import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import Vuelidate from 'vuelidate';
import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);
Vue.config.productionTip = false;
Vue.config.performance = false;
Vue.use(Vuelidate)

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");