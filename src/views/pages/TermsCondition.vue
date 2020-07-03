<template>
	<div>
		<NavbarSection />
		<PageHeader title="Terms & Condition"/>
		<div class="container">
			<v-row class="mt-2 my-2">
				<v-col sm="12" md="12" v-for="item in terms" :key="item.id_ketentuan_privasi">
					<h2> {{ item.judul_ketentuan }} </h2>
					<p> {{ item.ketentuan }} </p>
				</v-col>
			</v-row>
			<v-spacer></v-spacer>
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
  name: "TermsCondition",
  components: {
    NavbarSection,
    PageHeader,
    FooterSection
  },
  created() {
    this.$store.dispatch("getTerms");
  },
  computed: mapState({
	terms: state => state.termsCondition.data
  })
};
</script>
