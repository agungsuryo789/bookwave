<template>
	<div>
		<NavbarSection />
		<PageHeader title="Disclaimer"/>
		<div class="container">
		<v-row class="mt-2 my-2">
			<v-col sm="12" md="12" v-for="item in disclaimer" :key="item.id_disclaimer">
				<h1> {{ item.judul }} </h1>
				<p class="larger my-4"> {{ item.deskripsi }} </p>
			</v-col>
		</v-row>
		</div>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import PageHeader from "@/components/pages/PageHeader.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

export default {
  name: "DisclaimerPage",
  components: {
    NavbarSection,
    PageHeader,
    FooterSection
  },
  created() {
    this.$store.dispatch("getDisclaimer");
  },
  computed: mapState({
	disclaimer: state => state.disclaimer.data
  })
};
</script>

<style scoped>
	.larger{
		font-size: larger;
	}
</style>