<template>
<div class="Login">
    <v-app>
        <NavbarSection />
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="mt-12">
					<v-row justify="center" class="mt-12">
                        <v-col cols="6" md="4" align="center">
							<h2 class="font-weight-black"> MASUK AKUN</h2>
                        </v-col>
                    </v-row>
                </v-col>
				<v-col class="mt-8" cols="12">
					<v-row justify="center">
						<v-col cols="6" md="4" align="center">
							<v-btn href="/login/email" :elevation="8" block><v-icon dark left>mdi-email-outline</v-icon>Sign in with Email</v-btn>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="6" md="4" align="center">
							<!-- <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin> -->
							<v-btn :elevation="8" block><v-icon dark left>mdi-google</v-icon>Sign in with Google</v-btn>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="6" md="4" align="center">
							<v-btn :elevation="8" block><v-icon dark left>mdi-facebook</v-icon>Sign in with Facebook</v-btn>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="6" md="4" align="center">
							<v-btn :elevation="8" block><v-icon dark left>mdi-apple</v-icon>Sign in with Apple</v-btn>
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
import NavbarSection from '@/components/NavbarSection.vue';
import GoogleLogin from 'vue-google-login';
/* eslint-disable */
export default {
    name: 'Login',
    components: {
		NavbarSection,
		GoogleLogin
	},
	data() {
		return {
			// client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
			params: {
				client_id: "412849291381-rlc0nbjs71cih4quqdvc6jtbe20gnpd0.apps.googleusercontent.com"
			},
			// only needed if you want to render the button with the google ui
			renderParams: {
				width: 480,
				height: 50,
				longtitle: true
			}
		}
	},
	methods: {
        onSuccess(googleUser) {
            console.log(googleUser);

            // This only gets the user information: id, name, imageUrl and email
            console.log(googleUser.getBasicProfile());
        }
	}
}
</script>
