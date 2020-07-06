<template>
	<div class="container mt-10">
		<v-row justify="center">
			<v-col md="5">
					<h1 class="ungu"> {{ title }} </h1>
					<p> {{ subtitle }} </p>
			</v-col>
			<v-col md="2"></v-col>
			<v-col md="4">
				<v-img src="@/assets/image/career.png" height="240px" position="right 25%"></v-img>
			</v-col>
		</v-row>
		<hr class="mt-5">
	</div>
</template>

<script>
export default {
  name: "CareerHeader",
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