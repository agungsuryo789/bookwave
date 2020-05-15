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
						<EmailInput />
					</v-row>
					<v-row justify="center">
						<v-col cols="3" md="1" align="center">
							<v-btn :elevation="8" color="red darken-1" block x-large class="white--text" v-on:click="isShow = !isShow">Lanjut</v-btn>
						</v-col>
					</v-row>
				</v-col>
				<v-col v-show="!isShow" class="mt-8" cols="12">
					<v-row justify="center">
						<PasswordInput />
					</v-row>
					<v-row justify="center">
						<v-col cols="3" md="1" align="center">
							<v-btn :elevation="8" color="red darken-1" block x-large class="white--text">Masuk</v-btn>
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
import EmailInput from '@/components/auth/EmailInput.vue'
import PasswordInput from '@/components/auth/PasswordInput.vue'

/* eslint-disable */
export default {
    name: 'LoginEmail',
    components: {
		NavbarSection,
		EmailInput,
		PasswordInput
    },
	data(){
		return {
			isShow : true,
		}
    }
}
</script>
