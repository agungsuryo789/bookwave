<template>
  <div class="ForgotPassword">
    <NavbarSection />
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="mt-12">
          <v-row justify="center" class="mt-12">
            <v-col cols="12" md="4" align="center">
              <h2 class="font-weight-black">LUPA PASSWORD?</h2>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="mt-8" cols="12">
          <v-row justify="center">
            <v-col cols="10" md="4" align="center">
              <p class="red--text text--lighten-1">
                <v-icon class="red--text text--lighten-1 mr-3">mdi-email-outline</v-icon>Alamat Email
              </p>
              <v-text-field
                  class="centered-input"
                  solo
                  background-color="grey lighten-2"
                  v-model="email"
                  :error-messages="emailErrors"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="3" md="1" align="center">
              <v-btn
                :elevation="8"
                color="red darken-1"
                block
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
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import SnackbarToast from "@/components/SnackbarToast.vue";
import { mapMutations } from "vuex";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

/* eslint-disable */
export default {
  name: "ForgotPassword",
  components: {
	NavbarSection,
	SnackbarToast
  },
  mixins: [validationMixin],
  validations: {
    email: { required, email }
  },
  data() {
    return {
	  email: ""
    };
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
	  console.log(errors);
	}
  },
  methods: {
	...mapMutations(["showSnackbar", "closeSnackbar"]),
    submit() {
		this.$v.email.$touch();
		if (this.$v.email.$invalid) {

		}
		else{
			var data = {
			email: this.email
		};
		this.$store.dispatch("forgotPassword", data);
		this.showSnackbar()
		}
	}
  }
};
</script>

<style>
.centered-input input {
  text-align: center;
}
</style>