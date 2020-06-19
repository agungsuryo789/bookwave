<template>
<div class="Login">
    <v-app>
        <NavbarSection />
        <v-container fluid>
			<v-form>
            <v-row>
                <v-col cols="12" class="mt-12">
					<v-row justify="center" class="mt-12">
                        <v-col cols="12" md="4" align="center">
							<h2 class="font-weight-black"> MASUK AKUN </h2>
                        </v-col>
                    </v-row>
                </v-col>
				<v-col v-show="isShow" class="mt-8" cols="12">
					<v-row justify="center">
						<v-col cols="10" md="4" align="center">
							<p class="red--text text--lighten-1"><v-icon class="red--text text--lighten-1 mr-3">mdi-email-outline</v-icon>Alamat Email</p>
							<v-text-field class="centered-input" solo background-color="grey lighten-2" v-model="email" :error-messages="emailErrors" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="3" md="1" align="center">
							<v-btn :elevation="8" color="red darken-1" block x-large class="white--text" v-on:click="lanjut">Lanjut</v-btn>
						</v-col>
					</v-row>
				</v-col>
				<v-col v-show="!isShow" class="mt-8" cols="12">
					<v-row justify="center">
						<v-col cols="10" md="4" align="center">
							<p class="red--text text--lighten-1"><v-icon class="red--text text--lighten-1 mr-3">mdi-lock-outline</v-icon>Kata Sandi</p>
							<v-text-field class="centered-input" v-model="password" :error-messages="passwordErrors" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"  :type="show1 ? 'text' : 'password'" hint="At least 8 characters" counter @click:append="show1 = !show1" @input="$v.password.$touch()" @blur="$v.password.$touch()" solo background-color="grey lighten-2"></v-text-field>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="3" md="1" align="center">
							<v-btn :elevation="8" color="red darken-1" block x-large class="white--text" v-on:click="submit">Masuk</v-btn>
						</v-col>
					</v-row>
				</v-col>
            </v-row>
			<v-spacer></v-spacer>
			<v-row justify="center">
				<v-col cols="6" md="4" align="center" class="mt-12">
					<router-link to="/forgot">Lupa Kata Sandi</router-link>
				</v-col>
			</v-row>
			</v-form>
        </v-container>
    </v-app>
</div>
</template>

<script>
import NavbarSection from '@/components/NavbarSection.vue'
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'

/* eslint-disable */
export default {
	name: 'LoginEmail',
	mixins: [validationMixin],
	validations: {
		email: { required, email },
		password: {
			required,
			minLength: minLength(8)
		}
    },
    components: {
		NavbarSection
	},
	data(){
		return {
			isShow : true,
			email: '',
			lazy: false,
			show1: false,
			password: ''
		}
	},
	computed: {
		emailErrors () {
			const errors = []
			if (!this.$v.email.$dirty) return errors
			!this.$v.email.email && errors.push('Must be valid e-mail')
			!this.$v.email.required && errors.push('E-mail is required')
			return errors
			console.log(errors)
		  },
		passwordErrors () {
			const errors = []
			if (!this.$v.password.$dirty) return errors
			!this.$v.password.minLength && errors.push('At least must be 8 character')
			!this.$v.password.required && errors.push('Password is required')
			return errors
		}
	},
	methods: {
		lanjut () {
			this.$v.email.$touch()
			if (this.$v.email.$invalid) {
				this.isShow = true
			} else {
				this.isShow = false
			}
		},
      	submit () {
			this.$v.password.$touch()
			if (this.$v.password.$invalid) {
				alert('kesalahan!')
			} else {
				var data = {
					email: this.email,
					password: this.password,
					type: 1
				}
				this.$store.dispatch('userLogin', data)
			}
      	}
	}
}
</script>

<style>
	.centered-input input {
  		text-align: center
	}
</style>