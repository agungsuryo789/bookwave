<template>

	<v-row justify="center">
		<v-col cols="10" md="4" align="center">
			<p class="red--text text--lighten-1"><v-icon class="red--text text--lighten-1 mr-3">mdi-email-outline</v-icon>Alamat Email</p>
			<v-text-field v-model="email" class="centered-input" :rules="emailRules" solo background-color="grey lighten-2"></v-text-field>
		</v-col>
	</v-row>

</template>

<script>
/* eslint-disable */
export default {
	name: "EmailInput",
	data: () => ({
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      lazy: false,
	})
};
</script>

<style>
	.centered-input input {
  		text-align: center
	}
</style>