<template>
  <div class="Register">
    <NavbarSection />
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="mt-2">
          <v-row justify="center" class="mt-12">
            <v-col cols="6" md="4" align="center">
              <h2 class="font-weight-black">DAFTAR AKUN</h2>
            </v-col>
          </v-row>
        </v-col>
		<v-col cols="12" class="mt-8">
          <v-row justify="center">
            <v-col cols="12" md="4" align="center">
              <router-link to="/register/email" tag="button" style="width:100%;">
                <v-btn :elevation="1" block>
                  <v-icon dark left>mdi-email-outline</v-icon>Sign up with Email
                </v-btn>
              </router-link>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="4" align="center">
              <v-btn :elevation="1" block @click="register">
                <v-icon dark left>mdi-google</v-icon>Sign up with Google
              </v-btn>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="4" align="center">
              <v-btn :elevation="1" block @click="loginfb">
                <v-icon dark left>mdi-facebook</v-icon>Sign up with Facebook
              </v-btn>
            </v-col>
          </v-row>
		</v-col>
		</v-row>
          <v-spacer></v-spacer>
          <v-row justify="center">
            <v-col cols="6" md="4" align="center" class="mt-12">
              <a class="link" @click="login">Masuk</a>
            </v-col>
          </v-row>
    </v-container>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";

/* eslint-disable */
export default {
  name: "Register",
  components: {
    NavbarSection
  },
  methods: {
    register() {
      this.$store.dispatch("registerFirebase");
	  this.$store.dispatch("getMemberDetail");
    },
    loginfb() {
      this.$store.dispatch("loginFacebook");
	  this.$store.dispatch("getMemberDetail");
    },
    logout() {
      Firebase.logout();
	},
	login() {
		this.$router.push({
        name: "Login"
      });
	}
  }
};
</script>
<style scoped>
	.link {
		color: #D84B5B;
	}
</style>