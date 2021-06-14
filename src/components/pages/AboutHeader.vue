<template>
	<div class="container py-0 mt-10 head-dash">
		<v-row justify="center" class="align-items-center">
			<v-col md="5" class="px-0 py-0">
				<div class="px-5">
					<h1 class="ungu"> {{ title }} </h1>
					<p class="larger"> {{ subtitle }} </p>
				</div>
			</v-col>
			<v-col md="7" class="px-0 py-3">
				<v-img :src="banner" height="240px" width="auto" position="right 25%" gradient="to right, rgba(255, 255, 255), transparent"></v-img>
				<!-- <v-img src="@/assets/image/Group21.png" height="240px" width="auto" position="right 25%" gradient="to right, rgba(255, 255, 255), transparent"></v-img> -->
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
  name: "AboutHeader",
  props: {
    title: String,
    subtitle: String,
	banner: String
  }
}
</script>

<style>
	.larger {
		font-size: larger;
	}
	.ungu {
		color: rgb(46, 0, 78);
	}
	.head-dash{
		border: 2px #c8c8c8 dashed;
	}
</style>