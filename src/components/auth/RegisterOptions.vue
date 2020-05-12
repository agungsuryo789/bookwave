<template>
	<v-col class="mt-8" cols="12">
		<v-row justify="center">
			<v-col cols="6" md="4" align="center">
				<v-btn :elevation="8" block="true"><v-icon dark left>mdi-email-outline</v-icon> Sign up with Email</v-btn>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col cols="6" md="4" align="center">
				<v-btn :elevation="8" block="true"><v-icon dark left>mdi-google</v-icon>Sign up with Google</v-btn>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col cols="6" md="4" align="center">
				<v-btn :elevation="8" block="true"><v-icon dark left>mdi-facebook</v-icon>Sign up with Facebook</v-btn>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col cols="6" md="4" align="center">
				<v-btn :elevation="8" block="true"><v-icon dark left>mdi-apple</v-icon>Sign up with Apple</v-btn>
			</v-col>
		</v-row>
		<v-spacer></v-spacer>
		<v-row justify="center">
			<v-col cols="6" md="4" align="center" class="mt-12">
				<router-link to="/login">Masuk</router-link>
			</v-col>
		</v-row>
	</v-col>
</template>

<script>
/* eslint-disable */
export default {
  name: "RegisterOptions"
};
</script>