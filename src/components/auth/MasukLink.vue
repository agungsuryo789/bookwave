<template>
	<div>
		<v-row justify="center">
			<v-col cols="6" md="4" align="center" class="mt-12">
				<a class="link" @click="login">Masuk</a>
			</v-col>
        </v-row>
	</div>
</template>

<script>
export default {
	name: "MasukLink",
	methods: {
		login() {
			this.$router.push({
			name: "Login"
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