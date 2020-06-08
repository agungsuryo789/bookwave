import Vue from "vue";
// import Vuex from "vuex";
// import axios from "axios";
import 'midtrans-client/index';
// import AxiosPlugin from 'vue-axios-cors';

/* eslint-disable */
Vue.config.productionTip = false;
// Vue.use(AxiosPlugin)
const midtransClient = require('midtrans-client');
// Create Snap API instance
let snap = new midtransClient.Snap({
        isProduction : false,
        serverKey : 'YOUR_SERVER_KEY',
        clientKey : 'YOUR_CLIENT_KEY'
    });

let parameter = {
    "transaction_details": {
        "order_id": "test-transaction-123",
        "gross_amount": 200000
    }, "credit_card":{
        "secure" : true
    }
};

export default {
	pay() {
		redirect_url = 'https://app.sandbox.midtrans.com/snap/v2/vtweb/83cdd21a-f1a1-436d-b3fd-9b7917f89985'
		//snap.createTransaction(parameter)
		//.then((transaction)=>{
		//	// transaction redirect_url
		//	let redirectUrl = transaction.redirect_url;
		//	console.log('redirectUrl:',redirectUrl);
		//})
		//const auth = 'SB-Mid-server-icx9FXyQgbDyI46RE3ur8xbO';
		//const headers = {
		//	Accept: 'application/json',
		//	'Content-Type': 'application/json',
		//	Authorization: 'Basic' + Buffer.from("SB-Mid-server-icx9FXyQgbDyI46RE3ur8xbO").toString("base64")
		//}
		//var session_url = 'https://app.sandbox.midtrans.com/snap/v1/transactions';
		//axios.post(session_url, headers, {
		//	transaction_details: {
		//		order_id: "test-transaction-123",
		//		gross_amount: 9900
		//	},
		//	credit_card: {
		//		secure: true
		//	}
		// }).then(function(response) {
		//	let redirectUrl = response.redirectUrl;
		//	console.log(response);
		//  }).catch(function(error) {
		//	console.log(error);
		//  });
	}
}
