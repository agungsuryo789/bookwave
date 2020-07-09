<template>
  <div class="Login">
    <NavbarSection />
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="mt-2">
          <v-row justify="center" class="mt-12">
            <v-col cols="6" md="4" align="center">
              <h2 class="font-weight-black">MASUK AKUN</h2>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="mt-8" cols="12">
          <v-row justify="center">
            <v-col cols="12" md="4" align="center">
              <router-link to="/login/email" tag="button" style="width:100%;">
                <v-btn :elevation="1" block>
                  <v-icon dark left>mdi-email-outline</v-icon>Sign in with Email
                </v-btn>
              </router-link>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="4" align="center">
              <!--<section block id="firebaseui-auth-container"></section>-->
              <v-btn :elevation="1" block @click="login">
                <v-icon dark left>mdi-google</v-icon>Sign in with Google
              </v-btn>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="4" align="center">
              <v-btn :elevation="1" block @click="loginfb">
                <v-icon dark left>mdi-facebook</v-icon>Sign in with Facebook
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
		<ForgotLink />
      <v-snackbar v-model="snackbar">Mencoba Masuk...
        <v-btn color="blue" text @click="snackbar=false">Close</v-btn>
      </v-snackbar>
		<SnackbarToast />
    </v-container>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import ForgotLink from "@/components/auth/ForgotLink.vue";
import SnackbarToast from "@/components/SnackbarToast.vue";
import { mapMutations } from "vuex";

/* eslint-disable */
export default {
  name: "Login",
  components: {
	NavbarSection,
	SnackbarToast,
	ForgotLink
  },
  data() {
    return {
	  snackbar: false
    };
  },
  methods: {
	  ...mapMutations(["showSnackbar", "closeSnackbar"]),
    login() {
	  this.$store.dispatch("loginFirebase");
	  this.$store.dispatch("getMemberDetail");
	  this.snackbar = true;
    },
    loginfb() {
	  this.$store.dispatch("loginFacebook");
	  this.$store.dispatch("getMemberDetail");
	  this.snackbar = true;
    },
    logout() {
      Firebase.logout();
	}
  }
};
</script>