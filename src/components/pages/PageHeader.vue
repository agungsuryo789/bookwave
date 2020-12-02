<template>
	<v-container class="mt-10">
		<v-row align="center" justify="between">
			<v-col md="6">
				<h1 class="mb-3"> {{ title }} </h1>
				<div class="title-underline d-flex flex-row justify-start">
					<img src="@/assets/image/underline-1.svg" height="8" />
					<img class="mx-2" src="@/assets/image/underline-2.svg" height="8" />
				</div>
			</v-col>
			<v-col md="6">
				<p class="text-left text-md-right text-secondary"> Last Updated 12 March 2020 </p>
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
