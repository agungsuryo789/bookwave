<template>
	<div>
		<NavbarSection />
		<PageHeader title="Sitemap"/>
		<div class="container">
			<v-row>
				<v-col md="6">
					<h1 class="larger"> General </h1>
				</v-col>
			</v-row>
			<v-row class="mt-2 my-2">
				<v-col xs="4" md="3">
					<p class="larger"> Home </p>
					<p class="larger"> Books </p>
					<p class="larger"> Pricing </p>
				</v-col>
				<v-col xs="4" md="3">
					<p class="larger"> Pricing for Teams </p>
					<p class="larger"> Magazine </p>
					<p class="larger"> Help & Contact </p>
				</v-col>
				<v-col xs="4" md="3">
					<p class="larger"> About </p>
					<p class="larger"> Careers </p>
					<p class="larger"> Partners </p>
				</v-col>
			</v-row>

			<hr>
			<v-row class="mt-6">
				<v-col md="6">
					<h1 class="larger"> Top Articles </h1>
				</v-col>
			</v-row>
			<v-row class="mt-2 my-2">
				<v-col cols="12" md="4" v-for="item in blog" :key="item.id_blog">
					<p class="larger">{{ item.judul }} </p>
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
  name: "SitemapPage",
  components: {
    NavbarSection,
    PageHeader,
    FooterSection
  },
  created() {
    this.$store.dispatch("getBlog");
  },
  computed: mapState({
	blog: state => state.listBlog.data
  })
};
</script>

<style scoped>
	.larger {
		font-size: larger;
	}
</style>