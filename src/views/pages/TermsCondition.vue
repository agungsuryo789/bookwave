<template>
	<div>
		<NavbarSection />
		<PageHeader title="Terms & Condition"/>
		<div class="container">
		<v-row class="mt-2 my-2">
			<v-col sm="12" md="12">
				<h2>1. Lorem Ipsum </h2>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
			</v-col>
		</v-row>
		<v-row class="mt-2 my-2">
			<v-col sm="12" md="12">
				<h2>2. Lorem Ipsum </h2>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
			</v-col>
		</v-row>
		<v-row class="mt-2 my-2">
			<v-col sm="12" md="12">
				<h2>3. Lorem Ipsum </h2>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
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
  name: "TermsCondition",
  components: {
    NavbarSection,
    PageHeader,
    FooterSection
  }
};
</script>
