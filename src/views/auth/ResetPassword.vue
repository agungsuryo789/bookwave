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
        <v-col v-show="!isShow" class="mt-8" cols="12">
          <v-row justify="center">
            <v-col cols="10" md="4" align="center">
              <p class="red--text text--lighten-1">
                <v-icon class="red--text text--lighten-1 mr-3">mdi-lock-outline</v-icon>Kata Sandi
              </p>
              <v-text-field
                class="centered-input"
                v-model="password_repeat"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
                solo
                background-color="grey lighten-2"
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
              >RESET</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
    </v-container>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";

/* eslint-disable */
export default {
  name: "ResetPassword",
  components: {
    NavbarSection
  },
  data() {
    return {
      lazy: false,
      show1: false,
      rules: {
        required: value => !!value || "Required."
      }
    };
  },
  methods: {
    submit() {
      var data = {
        password: this.password
      };
      this.$store.dispatch("resetPassword", data);
    }
  }
};
</script>

<style>
.centered-input input {
  text-align: center;
}
</style>