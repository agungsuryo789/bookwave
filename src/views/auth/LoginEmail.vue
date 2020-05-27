<template>
<div class="Login">
    <v-app>
        <NavbarSection />
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="mt-12">
					<v-row justify="center" class="mt-12">
                        <v-col cols="6" md="4" align="center">
							<h2 class="font-weight-black"> MASUK AKUN </h2>
                        </v-col>
                    </v-row>
                </v-col>
				<v-col v-show="isShow" class="mt-8" cols="12">
					<v-row justify="center">
						<v-col cols="6" md="4" align="center">
							<p class="red--text text--lighten-1"><v-icon class="red--text text--lighten-1 mr-3">mdi-email-outline</v-icon>Alamat Email</p>
							<v-text-field v-model="email" class="centered-input" :rules="emailRules" solo background-color="grey lighten-2"></v-text-field>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="3" md="1" align="center">
							<v-btn :elevation="8" color="red darken-1" block x-large class="white--text" v-on:click="isShow = !isShow">Lanjut</v-btn>
						</v-col>
					</v-row>
				</v-col>
				<v-col v-show="!isShow" class="mt-8" cols="12">
					<v-row justify="center">
						<v-col cols="6" md="4" align="center">
							<p class="red--text text--lighten-1"><v-icon class="red--text text--lighten-1 mr-3">mdi-lock-outline</v-icon>Kata Sandi</p>
							<v-text-field class="centered-input" v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"  :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" hint="At least 8 characters" counter @click:append="show1 = !show1" solo background-color="grey lighten-2"></v-text-field>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="3" md="1" align="center">
							<v-btn :elevation="8" color="red darken-1" block x-large class="white--text" @click="submit">Masuk</v-btn>
						</v-col>
					</v-row>
				</v-col>
            </v-row>
			<v-spacer></v-spacer>
			<v-row justify="center">
				<v-col cols="6" md="4" align="center" class="mt-12">
					<router-link to="/register">Lupa Kata Sandi</router-link>
				</v-col>
			</v-row>
        </v-container>
    </v-app>
</div>
</template>

<script>
import NavbarSection from '@/components/NavbarSection.vue'

/* eslint-disable */
export default {
    name: 'LoginEmail',
    components: {
		NavbarSection
    },
	data(){
		return {
			isShow : true,
			email: '',
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			],
			lazy: false,
			show1: false,
        	rules: {
				required: value => !!value || 'Required.',
				min: v => v.length >= 8 || 'Min 8 characters',
				emailMatch: () => ('The email and password you entered don\'t match'),
			}
		}
	},
	methods: {
      submit () {
          var data = {
              email: this.email,
			  password: this.password,
			  type: 1
			}

			this.$store.dispatch('userLogin', data)
			.then(() => this.$router.push('/home'))
      }
    }
}
</script>
