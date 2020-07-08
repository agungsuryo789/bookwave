<template>
  <div class="Login">
    <NavbarSection />
    <v-form>
      <v-container fluid>
        <v-row>
          <v-col cols="12" class="mt-2">
            <v-row justify="center" class="mt-10">
              <v-col cols="6" md="4" align="center">
                <h2 class="font-weight-black">DAFTAR AKUN</h2>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-show="isShow" class="mt-8" cols="12">
            <v-row justify="center">
              <v-col cols="10" md="4" align="center">
                <p class="red--text text--lighten-1">
                  <v-icon class="red--text text--lighten-1 mr-3">mdi-email-outline</v-icon>Alamat Email
                </p>
                <v-text-field
                  v-model="emailReg"
                  class="centered-input"
                  :error-messages="emailErrors"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                  solo
                  background-color="grey lighten-2"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col align="center">
                <v-btn
                  :elevation="8"
                  color="red darken-1"
                  x-large
                  class="white--text"
                  v-on:click="lanjut"
                >Lanjut</v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-show="!isShow" class="mt-8" cols="12">
            <v-row justify="center">
              <v-col cols="10" md="4" align="center">
                <p class="red--text text--lighten-1">
                  <v-icon class="red--text text--lighten-1 mr-3">mdi-lock-outline</v-icon>Kata Sandi
                </p>
                <v-text-field
                  class="centered-input"
                  v-model="passwordReg"
                  :error-messages="passwordErrors"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' :'password'"
                  counter
                  @click:append="show1 = !show1"
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                  solo
                  background-color="grey lighten-2"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col align="center">
                <v-btn
                  :elevation="8"
                  color="red darken-1"
                  x-large
                  class="white--text"
                  @click="submit"
                >Daftar</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <MasukLink />
		<SnackbarToast />
      </v-container>
    </v-form>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import MasukLink from "@/components/auth/MasukLink.vue";
import { validationMixin } from "vuelidate";
import { mapMutations } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";
import SnackbarToast from "@/components/SnackbarToast.vue";

/* eslint-disable */
export default {
  name: "RegisterEmail",
  mixins: [validationMixin],
  validations: {
	emailReg: { required, email },
	passwordReg: {
	required,
	minLength: minLength(8)
	}
  },
  components: {
	NavbarSection,
	SnackbarToast,
	MasukLink
  },
  data() {
    return {
      isShow: true,
      lazy: false,
      show1: false,
		emailReg: "",
		passwordReg: ""
    }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.emailReg.$dirty) return errors;
      !this.$v.emailReg.email && errors.push("Must be valid e-mail");
      !this.$v.emailReg.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.passwordReg.$dirty) return errors;
      !this.$v.passwordReg.minLength &&
        errors.push("At least must be 8 character");
      !this.$v.passwordReg.required && errors.push("Password is required");
      return errors;
    }
  },
  methods: {
	  ...mapMutations(["showSnackbar", "closeSnackbar"]),
    lanjut() {
      this.$v.emailReg.$touch();
      if (this.$v.emailReg.$invalid) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    submit() {
      this.$v.passwordReg.$touch();
      if (this.$v.passwordReg.$invalid) {

      } else {
		var data = {
          email: this.emailReg,
          password: this.passwordReg,
          type: 1
        };
		this.$store.dispatch("userRegister", data);
		this.$store.dispatch("getMemberDetail");
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