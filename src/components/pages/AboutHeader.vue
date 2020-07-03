<template>
	<div class="container mt-10">
		<v-row justify="center">
			<v-col md="5">
					<h1 class="ungu"> {{ title }} </h1>
					<p> {{ subtitle }} </p>
			</v-col>
			<v-col md="6">
				<v-img src="@/assets/image/Group21.png" height="240px" position="right 25%"></v-img>
			</v-col>
		</v-row>
		<hr class="mt-5">
	</div>
</template>

<script>
export default {
  name: "AboutHeader",
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style>
	.ungu {
		color: rgb(46, 0, 78);
	}
</style>