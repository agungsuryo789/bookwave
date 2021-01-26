<template>
  <div class="ForgotPassword">
    <NavbarSection />
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="mt-2">
          <v-row justify="center" class="mt-12">
            <v-col cols="12" md="4" align="center">
              <h2 class="font-weight-black">UBAH PASSWORD</h2>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="mt-8" cols="12">
          <v-row justify="center">
            <v-col cols="10" md="4" align="center">
              <label style="display: inline-block;margin-bottom:15px">New Password</label>
              <v-text-field
                v-model="password"
                :rules="[rules.required, rules.min]"
                hint="At least 8 characters"
                type="password"
                required
                class="centered-input form-auth"
                solo
              ></v-text-field>
              <label style="display: inline-block;margin-bottom:15px">Confirm Password</label>
              <v-text-field
                v-model="confirmPassword"
                :rules="[
                  password === confirmPassword ||
                    'Password must match'
                ]"
                hint="At least 8 characters"
                type="password"
                required
                class="centered-input form-auth"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="4" align="center">
              <v-btn
                color="red darken-1"
                x-large
                class="white--text"
                v-on:click="submit"
              >Kirim</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!--<v-snackbar v-model="snackbar">
        Berhasil Kirim Email. Cek Email Kamu ^_^
        <v-btn color="blue" text @click="snackbar=false">Close</v-btn>
      </v-snackbar>-->
		<SnackbarToast />
      <v-spacer></v-spacer>
    </v-container>
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import SnackbarToast from "@/components/SnackbarToast.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapMutations } from "vuex";

/* eslint-disable */
export default {
  name: "ChangePassword",
  components: {
	NavbarSection,
  SnackbarToast,
  FooterSection
  },
  data() {
    return {
      password: "",
      confirmPassword: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 6 || "Min 6 characters"
      }
    };
  },
  methods: {
	...mapMutations(["showSnackbar", "closeSnackbar"]),
    submit() {
      var data = {
        password: this.password,
        newPassword: this.newPassword,
      }
      if (
        this.password != "" &&
        this.confirmPassword != "" &&
        this.password === this.confirmPassword
      ) {
        this.$store.dispatch("changePassword", data);
        this.showSnackbar()
      }
	  }
  },
};
</script>

<style>
.centered-input input {
  text-align: center;
}
</style>