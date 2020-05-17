<template>
	<v-container class="mt-10">
		<v-row>
			<v-col md="6">
				<h1> {{ title }} </h1>
				<v-row>
					<v-img lazy-src="@/assets/image/underline-1.svg" class="ml-3 mr-4" max-width="80px"></v-img>
					<v-img lazy-src="@/assets/image/underline-1.svg" max-width="20px"></v-img>
				</v-row>
			</v-col>
			<v-col md="6">
				<p class="text-left text-md-center text-secondary"> Last Updated 12 March 2020 </p>
			</v-col>
		</v-row>
		<hr class="mt-5">
	</v-container>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: String
  }
}
</script>
