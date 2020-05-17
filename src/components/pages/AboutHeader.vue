<template>
	<div class="container mt-10">
		<v-row>
			<v-col md="4">
				<h1> {{ title }} </h1>
					<p> {{ subtitle }} </p>
			</v-col>
			<v-col md="8">
				<v-img src="@/assets/image/Group21.png"></v-img>
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
