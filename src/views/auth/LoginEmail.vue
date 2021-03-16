<template>
  <div class="Login">
    <NavbarSection />
    <v-container fluid>
      <v-form>
        <v-row>
          <v-col cols="12" class="mt-2">
            <v-row justify="center" class="mt-10">
              <v-col cols="12" md="4" align="center">
                <h2 class="font-weight-black">MASUK AKUN</h2>
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
                  class="centered-input form-auth"
                  solo
                  v-model="email"
                  :error-messages="emailErrors"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="4" md="2" align="center">
                <v-btn
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
                  class="centered-input form-auth "
                  v-model="password"
                  :error-messages="passwordErrors"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                  solo
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="4" md="" align="center">
                <v-btn
                  color="red darken-1"
                  x-large
                  class="white--text"
                  v-on:click="submit"
                >Masuk</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <ForgotLink />
      </v-form>
      <SnackbarToast />
    </v-container>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import SnackbarToast from "@/components/SnackbarToast.vue";
import ForgotLink from "@/components/auth/ForgotLink.vue";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapMutations } from "vuex";

/* eslint-disable */
export default {
  name: "LoginEmail",
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  components: {
	NavbarSection,
	SnackbarToast,
	ForgotLink
  },
  data() {
    return {
      isShow: true,
      email: "",
      lazy: false,
      show1: false,
	  password: "",
    };
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("At least must be 8 character");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
	}
  },
  methods: {
	...mapMutations(["showSnackbar", "closeSnackbar"]),
    lanjut() {
      this.$v.email.$touch();
      if (this.$v.email.$invalid) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    submit() {
      this.$v.password.$touch();
      if (this.$v.password.$invalid) {
		  this.$router.go(0)
      } else {
        var data = {
          email: this.email,
          password: this.password,
          type: 1
        };
      this.$store.dispatch("userLogin", data);
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