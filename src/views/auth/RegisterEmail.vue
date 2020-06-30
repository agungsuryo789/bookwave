<template>
  <div class="Login">
    <NavbarSection />
    <v-form>
      <v-container fluid>
        <v-row>
          <v-col cols="12" class="mt-12">
            <v-row justify="center" class="mt-12">
              <v-col cols="6" md="4" align="center">
                <h2 class="font-weight-black">DAFTAR AKUN</h2>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-show="isShow" class="mt-8" cols="12">
            <v-row justify="center">
              <v-col align="center">
                <p class="red--text text--lighten-1">
                  <v-icon class="red--text text--lighten-1 mr-3">mdi-email-outline</v-icon>Alamat Email
                </p>
                <v-text-field
                  v-model="registerPayload.email"
                  class="centered-input"
                  :error-messages="emailErrors"
                  required
                  @input="$v.registerPayload.email.$touch()"
                  @blur="$v.registerPayload.email.$touch()"
                  solo
                  background-color="grey lighten-2"
                  style="max-width:50%;"
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
              <v-col cols="6" md="4" align="center">
                <p class="red--text text--lighten-1">
                  <v-icon class="red--text text--lighten-1 mr-3">mdi-lock-outline</v-icon>Kata Sandi
                </p>
                <v-text-field
                  class="centered-input"
                  v-model="registerPayload.password"
                  :error-messages="passwordErrors"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' :'password'"
                  counter
                  @click:append="show1 = !show1"
                  @input="$v.registerPayload.password.$touch()"
                  @blur="$v.registerPayload.password.$touch()"
                  solo
                  background-color="grey lighten-2"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="10" md="1" align="center">
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
        <v-row justify="center">
          <v-col cols="6" md="4" align="center" class="mt-12">
            <router-link to="/login">Masuk</router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";

/* eslint-disable */
export default {
  name: "RegisterEmail",
  mixins: [validationMixin],
  validations: {
    registerPayload: {
      email: { required, email },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  components: {
    NavbarSection
  },
  data() {
    return {
      isShow: true,
      lazy: false,
      show1: false,
      registerPayload: {
        email: "",
        password: "",
        type: "1"
      }
    };
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.registerPayload.email.$dirty) return errors;
      !this.$v.registerPayload.email.email &&
        errors.push("Must be valid e-mail");
      !this.$v.registerPayload.email.required &&
        errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.registerPayload.password.$dirty) return errors;
      !this.$v.registerPayload.password.minLength &&
        errors.push("At least must be 8 character");
      !this.$v.registerPayload.password.required &&
        errors.push("Password is required");
      return errors;
    }
  },
  methods: {
    lanjut() {
      this.$v.registerPayload.email.$touch();
      if (this.$v.registerPayload.email.$invalid) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    submit() {
      this.$v.registerPayload.password.$touch();
      if (this.$v.registerPayload.password.$invalid) {
        this.snackbar = true;
      } else {
        this.$store.dispatch("userRegister", this.registerPayload);
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