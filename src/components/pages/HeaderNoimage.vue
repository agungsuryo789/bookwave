<template>
	<div class="container mt-10">
		<v-row justify="center">
			<v-col cols=12 md="12">
					<h1 class="ungu"> {{ title }} </h1>
					<p> {{ subtitle }} </p>
			</v-col>
		</v-row>
		<hr class="mt-5">
	</div>
</template>

<script>
export default {
  name: "HeaderNoimage",
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