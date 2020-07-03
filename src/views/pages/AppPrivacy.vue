<template>
	<div>
		<NavbarSection />
		<PageHeader title="Application Privacy"/>
		<div class="container">
		<v-row class="mt-2 my-2">
			<v-col sm="12" md="12" v-for="item in appprivacy" :key="item.id_privasi_aplikasi">
				<h2> {{ item.judul }} </h2>
				<p> {{ item.deskripsi }}</p>
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
    this.$store.dispatch("getApplicationPrivacy");
  },
  computed: mapState({
	appprivacy: state => state.applicationPrivacy.data
  })
};
</script>
