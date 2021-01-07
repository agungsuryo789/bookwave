<template>
	<div class="container mt-10">
		<v-row justify="center" class="relative">
			<v-col md="5" class="text-heading">
					<h1 class="ungu"> {{ title }} </h1>
					<p> {{ subtitle }} </p>
			</v-col>
			<v-col md="2"></v-col>
			<v-col md="4">
				<v-img src="@/assets/image/career.png" height="240px" position="right 25%" gradient="to right, rgba(255, 255, 255), transparent"></v-img>
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

<style lang="scss">
.ungu {
	color: rgb(46, 0, 78);
}
.text-heading {
	position: absolute;
	z-index: 9;
	width: 70%;
	left: 0;
	top: 17px;
}
.relative{
	position: relative;
}
</style>