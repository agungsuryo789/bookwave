<template>
	<v-col cols="6" md="4" align="center">
		<p class="red--text text--lighten-1"><v-icon class="red--text text--lighten-1 mr-3">mdi-lock-outline</v-icon>Kata Sandi</p>
		<v-text-field class="centered-input" v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"  :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" hint="At least 8 characters" counter @click:append="show1 = !show1" solo background-color="grey lighten-2"></v-text-field>
	</v-col>
</template>

<script>
/* eslint-disable */
export default {
	name: "PasswordInput",
	data () {
      return {
        show1: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
    }
}
};
</script>

<style>
	.centered-input input {
  		text-align: center
	}
</style>