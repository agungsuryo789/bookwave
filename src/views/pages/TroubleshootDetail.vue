<template>
	<div>
		<NavbarSection :isTroubleshoot="true" />
		<v-container class="mt-10">
			<v-row align="center" justify="between">
				<v-col cols="12" md="9">
					<h1> {{ bantuan.judul }}</h1>
					<v-row>
						<v-img lazy-src="@/assets/image/underline-1.svg" class="ml-3 mr-4" max-width="80px"></v-img>
						<v-img lazy-src="@/assets/image/underline-1.svg" max-width="20px"></v-img>
					</v-row>
				</v-col>
			</v-row>
			<hr class="mt-5">
			<v-row class="mt-2 my-2">
				<v-col>
					<p style="white-space:pre-line"> {{ bantuan.isi_bantuan }} </p>
				</v-col>
			</v-row>
		</v-container>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  name: "TroubleshootDetail",
  components: {
    NavbarSection,
    FooterSection
  },
  created() {
	this.$store.dispatch("getBantuanDetail", this.$route.params.idBantuan);
  },
  computed: mapState({
	bantuan: state => state.bantuanDetail.data
  })
};
</script>

<style scoped>
	.larger {
		font-size: larger;
	}
</style>