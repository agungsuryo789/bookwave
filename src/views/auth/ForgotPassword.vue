<template>
<div class="ForgotPassword">
    <v-app>
        <NavbarSection />
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="mt-12">
					<v-row justify="center" class="mt-12">
                        <v-col cols="12" md="4" align="center">
							<h2 class="font-weight-black"> LUPA PASSWORD? </h2>
                        </v-col>
                    </v-row>
                </v-col>
				<v-col class="mt-8" cols="12">
					<v-row justify="center">
						<v-col cols="10" md="4" align="center">
							<p class="red--text text--lighten-1"><v-icon class="red--text text--lighten-1 mr-3">mdi-email-outline</v-icon>Alamat Email</p>
							<v-text-field v-model="email" class="centered-input" :rules="emailRules" solo background-color="grey lighten-2"></v-text-field>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="3" md="1" align="center">
							<v-btn :elevation="8" color="red darken-1" block x-large class="white--text" v-on:click="submit">Kirim</v-btn>
						</v-col>
					</v-row>
				</v-col>
            </v-row>
			<v-snackbar v-model="snackbar">
				{{ notifMessage }}
				<v-btn color="blue"	text @click="snackbar = false">
					Close
				</v-btn>
			</v-snackbar>
			<v-spacer></v-spacer>
        </v-container>
    </v-app>
</div>
</template>

<script>
import NavbarSection from '@/components/NavbarSection.vue'
import { mapState } from "vuex";

/* eslint-disable */
export default {
    name: 'ForgotPassword',
    components: {
		NavbarSection
	},
	data(){
		return {
			email: '',
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			]
		}
	},
	methods: {
      submit () {
          var data = {
              email: this.email
			}
			this.$store.dispatch('forgotPassword', data)
			this.snackbar = true
      }
	},
	computed: mapState({
		notifMessage: state => state.notifMessage
	})
}
</script>

<style>
	.centered-input input {
  		text-align: center
	}
</style>