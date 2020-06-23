<template>
  <div class="Login">
    <NavbarSection />
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="mt-12">
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
      <v-row justify="center">
        <v-col cols="6" md="4" align="center" class="mt-12">
          <router-link to="/register">Lupa Kata Sandi</router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";

/* eslint-disable */
export default {
  name: "Login",
  components: {
    NavbarSection
  },
  methods: {
    login() {
      this.$store.dispatch("loginFirebase");
    },
    loginfb() {
      Firebase.loginfb();
    },
    logout() {
      Firebase.logout();
    }
  }
};
</script>
