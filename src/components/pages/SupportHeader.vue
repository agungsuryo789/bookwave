<template>
	<v-container class="mt-10">
		<v-row>
			<v-col md="6">
				<h4> AHA Support > {{ title }} </h4>
			</v-col>
			<v-col md="6">
				<v-text-field solo rounded="4" label="Temukan yang anda cari" prepend-inner-icon="mdi-magnify"></v-text-field>
			</v-col>
		</v-row>
		<hr class="mt-5">
	</v-container>
</template>

<script>
export default {
  name: "SupportHeader",
  props: {
    title: String
  }
}
</script>
