<template>
<div class="Login">
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
                </v-col>
				<v-col class="mt-8" cols="12">
					<v-row justify="center">
						<EmailInput />
					</v-row>
					<v-row justify="center">
						<v-col cols="3" md="1" align="center">
							<v-btn href="/register/pwd" :elevation="8" color="red darken-1" block x-large class="white--text">Lanjut</v-btn>
						</v-col>
					</v-row>
				</v-col>
            </v-row>
			<v-spacer></v-spacer>
			<v-row justify="center">
				<v-col cols="6" md="4" align="center" class="mt-12">
					<router-link to="/login">Masuk</router-link>
				</v-col>
			</v-row>
        </v-container>
    </v-app>
</div>
</template>

<script>
import NavbarSection from '@/components/NavbarSection.vue'
import EmailInput from '@/components/auth/EmailInput.vue'

/* eslint-disable */
export default {
    name: 'RegisterEmail',
    components: {
		NavbarSection,
		EmailInput
    }
}
</script>
