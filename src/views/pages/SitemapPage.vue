<template>
	<div>
		<NavbarSection />
		<PageHeader title="Sitemap"/>
		<div class="container">
			<v-row>
				<v-col md="6">
					<h1> General </h1>
				</v-col>
			</v-row>
			<v-row class="mt-2 my-2">
				<v-col sm="4" md="2">
					<p> Home </p>
					<p> Books </p>
					<p> Pricing </p>
				</v-col>
				<v-col sm="4" md="2">
					<p> Pricing for Teams </p>
					<p> Magazine </p>
					<p> Help & Contact </p>
				</v-col>
				<v-col sm="4" md="2">
					<p> About </p>
					<p> Careers </p>
					<p> Partners </p>
				</v-col>
			</v-row>

			<hr>
			<v-row class="mt-6">
				<v-col md="6">
					<h1> Top Articles </h1>
				</v-col>
			</v-row>
			<v-row class="mt-2 my-2">
				<v-col sm="12" md="4">
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
				</v-col>
				<v-col sm="12" md="4">
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
				</v-col>
				<v-col sm="12" md="4">
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
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

export default {
  name: "SitemapPage",
  components: {
    NavbarSection,
    PageHeader,
    FooterSection
  }
};
</script>
