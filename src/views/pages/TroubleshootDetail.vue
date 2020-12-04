<template>
	<div>
		<NavbarSection :isTroubleshoot="true" />
		<v-container class="mt-10">
			<v-row align="center" justify="between">
				<v-col cols="12" md="12">
					<h1 style="color:#7D6183"> {{ bantuan.judul }}</h1>
				</v-col>
			</v-row>
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