<template>
	<v-container class="mt-10">
		<v-row>
			<v-col cols="12" sm="12" md="8">
				<h4 style="margin-top: 12px;color:#72547a"> AHA Support > {{ title }} </h4>
			</v-col>
			<v-col cols="12" sm="12" md="4">
				<v-text-field class="contact-form" solo rounded="4" label="Temukan yang anda cari" prepend-inner-icon="mdi-magnify"></v-text-field>
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
