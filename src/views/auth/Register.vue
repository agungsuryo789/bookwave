<template>
<div class="Register">
    <v-app>
        <NavbarSection />
        <v-container fluid>
            <v-row>
                <v-col cols="12" class="mt-12">
					<v-row justify="center" class="mt-12">
                        <v-col cols="6" md="4" align="center">
							<h2 class="font-weight-black"> DAFTAR AKUN </h2>
                        </v-col>
                    </v-row>
					<v-row justify="center">
						<v-col cols="6" md="4" align="center">
							<v-btn :elevation="8" block><v-icon dark left>mdi-email-outline</v-icon> Sign up with Email</v-btn>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="6" md="4" align="center">
							<v-btn :elevation="8" block><v-icon dark left>mdi-google</v-icon>Sign up with Google</v-btn>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="6" md="4" align="center">
							<v-btn :elevation="8" block><v-icon dark left>mdi-facebook</v-icon>Sign up with Facebook</v-btn>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="6" md="4" align="center">
							<v-btn :elevation="8" block><v-icon dark left>mdi-apple</v-icon>Sign up with Apple</v-btn>
						</v-col>
					</v-row>
					<v-spacer></v-spacer>
					<v-row justify="center">
						<v-col cols="6" md="4" align="center" class="mt-12">
							<router-link to="/login">Masuk</router-link>
						</v-col>
					</v-row>
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
    name: 'Register',
    components: {
		NavbarSection
    }
}
</script>
