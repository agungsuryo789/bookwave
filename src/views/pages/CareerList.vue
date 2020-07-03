<template>
	<div>
		<NavbarSection />
		<PageHeader title="Karir"/>
		<div class="container">
		<v-row class="mt-2 my-2">
			<v-col sm="12" md="4" v-for="item in career" :key="item.id_karir">
				<h4> {{ item.karir }} </h4>
				<p> {{ item.deskripsi.substring(0,50)+"..." }} </p>
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
  name: "AppPrivacy",
  components: {
    NavbarSection,
    PageHeader,
    FooterSection
  },
  created() {
    this.$store.dispatch("getCareer");
  },
  computed: mapState({
	career: state => state.career.data
  })
};
</script>
