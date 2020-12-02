<template>
  <div class="ResetPassword">
    <NavbarSection />
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="mt-2">
          <v-row justify="center" class="mt-12">
            <v-col cols="12" md="4" align="center">
              <h2 class="font-weight-black">RESET PASSWORD</h2>
            </v-col>
          </v-row>
        </v-col>
        <!--<v-col v-show="isShow" class="mt-8" cols="12">
					<v-row justify="center">
						<v-col cols="10" md="4" align="center">
							<p class="red--text text--lighten-1"><v-icon class="red--text text--lighten-1 mr-3">mdi-lock-outline</v-icon>Kata Sandi Baru</p>
							<v-text-field class="centered-input" v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"  :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" hint="At least 8 characters" counter @click:append="show1 = !show1" solo background-color="grey lighten-2"></v-text-field>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="3" md="1" align="center">
							<v-btn v-bind:disabled="email.length == 0" :elevation="8" color="red darken-1" block x-large class="white--text" v-on:click="isShow = !isShow">Lanjut</v-btn>
						</v-col>
					</v-row>
        </v-col>-->
        <v-col class="mt-8" cols="12">
          <v-row justify="center">
            <v-col cols="10" md="4" align="center">
              <p class="red--text text--lighten-1">
                <v-icon class="red--text text--lighten-1 mr-3">mdi-lock-outline</v-icon>Kata Sandi
              </p>
              <v-text-field
                  class="centered-input form-auth"
                  v-model="passwordReset"
                  :error-messages="passwordErrors"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' :'password'"
                  counter
                  @click:append="show1 = !show1"
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                  solo
                ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="4" align="center">
              <v-btn
                :elevation="8"
                color="red darken-1"
                x-large
                class="white--text"
                v-on:click="submit"
              >RESET</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
		<SnackbarToast/>
      <v-spacer></v-spacer>
    </v-container>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import { validationMixin } from "vuelidate";
import { mapMutations } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
import SnackbarToast from "@/components/SnackbarToast.vue";

/* eslint-disable */
export default {
  name: "ResetPassword",
  components: {
	NavbarSection,
	SnackbarToast
  },
  mixins: [validationMixin],
  validations: {
	passwordReset: {
	required,
	minLength: minLength(8)
	}
  },
  data() {
    return {
      lazy: false,
      show1: false
    };
  },
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.passwordReset.$dirty) return errors;
      !this.$v.passwordReset.minLength &&
        errors.push("At least must be 8 character");
      !this.$v.passwordReset.required && errors.push("Password is required");
      return errors;
    }
  },
  mounted() {
    this.$store.dispatch("resetPassword", this.$route.params.token);
  },
  methods: {
	 ...mapMutations(["showSnackbar", "closeSnackbar"]),
    submit() {
		this.$v.passwordReset.$touch();
		if (this.$v.passwordReset.$invalid) {
			this.$router.go(0)
      } else {
		var data = {
			password: this.passwordReset
		};
      	this.$store.dispatch("goReset", data);
	  };
    }
  }
};
</script>

<style>
.centered-input input {
  text-align: center;
}
</style>