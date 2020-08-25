<template>
	<div>
		<NavbarSection :isTroubleshoot="true" />
		<HeaderNoimage title="Step By Step & Troubleshooting"/>
		<div class="container">
		<v-row class="mt-2 my-2">
			<v-expansion-panels multiple>
				<v-expansion-panel  v-for="item in listBantuan" :key="item.id_bantuan_kategori">
					<v-expansion-panel-header>
						<h2 class="ungu">{{ item.nama_kategori}}</h2>
					</v-expansion-panel-header>
					<v-expansion-panel-content v-for="items in item.list_bantuan" :key="items.id_bantuan">
						<a @click="goDetail(items.id_bantuan)">
						<p> {{ items.judul }}</p>
						</a>
						<hr />
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-row>
		</div>
		<FooterSection />
	</div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import HeaderNoimage from "@/components/pages/HeaderNoimage.vue";
import FooterSection from "@/components/FooterSection.vue";
import { mapState } from "vuex";

/* eslint-disable */
export default {
  name: "Troubleshoot",
  components: {
    NavbarSection,
    HeaderNoimage,
    FooterSection
  },
  created() {
	this.$store.dispatch("getBantuan");
  },
  computed: mapState({
	listBantuan: state => state.listBantuan.data
  }),
  methods: {
	  goDetail(idBantuan) {
      this.$router.push({
        name: "TroubleshootDetail",
        params: { idBantuan: idBantuan }
	  	});
	  }
  }
};
</script>

<style scoped>
	.larger {
		font-size: larger;
	}
</style>