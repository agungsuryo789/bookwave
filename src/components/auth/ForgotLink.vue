<template>
	<div>
		<v-row justify="center">
			<v-col cols="6" md="4" align="center" class="mt-12">
			<a class="red--text" @click="forgot">Lupa Kata Sandi</a>
			</v-col>
		</v-row>
	</div>
</template>
<script>
export default {
	name: "FogotLink",
	methods: {
		forgot() {
			this.$router.push({
			name: "ForgotPassword"
		});
		}
	}
}
</script>

<style scoped>
	.link {
		color: #D84B5B;
	}
</style>