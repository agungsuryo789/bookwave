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
				<LoginOptions />
            </v-row>
        </v-container>
    </v-app>
</div>
</template>

<script>
import NavbarSection from '@/components/NavbarSection.vue'
import LoginOptions from '@/components/auth/LoginOptions.vue'
/* eslint-disable */
export default {
    name: 'Login',
    components: {
		NavbarSection,
		LoginOptions
    }
}
</script>
